const express = require('express');
const { uploader } = require('../controllers/upload');
const status = require('../controllers/status');
const output = require('../controllers/output');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
router.post('/upload', upload.single('csv'), uploader);
router.get('/status/:request_id', status.getStatus);
router.get('/output/:request_id', output.getOutput);

module.exports = router;