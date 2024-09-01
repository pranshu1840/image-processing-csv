const Agenda = require('agenda');
const { processImage, processImageToWebP } = require('./imageCompressor');
const Request = require('../models/requestModel');
const Product = require('../models/productModel');
const path = require("path");
const agenda = new Agenda({ db: { address: process.env.MONGO_URL } });

agenda.define('process image', async (job) => {
  const { request_id, product_name, input_image_urls } = job.attrs.data;

  const output_image_urls = [];
  const webp_image_urls = [];

  for (const url of input_image_urls) {
    const originalName = path.basename(url);
    const outputUrl = await processImage(url, request_id, originalName);
    const webpUrl = await processImageToWebP(url, request_id, originalName);
    output_image_urls.push(outputUrl);
    webp_image_urls.push(webpUrl);
  }

  await Product.create({
    request_id,
    product_name,
    input_image_urls,
    output_image_urls,
    webp_image_urls,
  });

  const request = await Request.findOne({ request_id });
  if (request && request.status !== 'completed') {
    const allProductsProcessed = await Product.find({ request_id });
    if (allProductsProcessed.length === input_image_urls.length) {
      await Request.updateOne({ request_id }, { status: 'completed' });
    }
  }
});

const startScheduler = async () => {
  await agenda.start();
  console.log('Scheduler started');
};

module.exports = { agenda, startScheduler };