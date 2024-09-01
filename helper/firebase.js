const { initializeApp, cert } = require('firebase-admin/app');
const { getStorage } = require('firebase-admin/storage');
const path = require('path');

// Initialize Firebase
const serviceAccount = require(path.join(__dirname, '..', './image-processing-c880b-firebase-adminsdk-nx9z5-aefeab2b57.json'));

const app = initializeApp({
  credential: cert(serviceAccount),
  storageBucket: 'image-processing-c880b.appspot.com'
});

const bucket = getStorage(app).bucket();

module.exports = { bucket };
