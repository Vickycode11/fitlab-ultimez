// routes/paymentRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const Payment = require('../models/Payment'); // Adjust path to your Payment model

const router = express.Router();

// Multer setup to save files to uploads/
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// POST route to upload payment with screenshot
router.post('/upload-payment', upload.single('screenshot'), async (req, res) => {
  try {
    const { utr, name } = req.body;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const payment = new Payment({
      utr,
      name,
      screenshot: file.filename,
    });

    await payment.save();

    res.status(201).json({ message: 'Payment saved', payment });
  } catch (err) {
    console.error('Error saving payment:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET route to fetch all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find({});
    res.json(payments);
  } catch (err) {
    console.error('Error fetching payments:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
