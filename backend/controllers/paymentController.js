// backend/controllers/paymentController.js
const Payment = require('../models/Payment');

exports.uploadPayment = async (req, res) => {
  try {
    const { utr } = req.body;
    const screenshot = req.file ? `/uploads/${req.file.filename}` : null;

    if (!utr || !screenshot) {
      return res.status(400).json({ error: 'UTR and screenshot are required' });
    }

    const payment = new Payment({ utr, screenshot });
    await payment.save();

    res.status(201).json({ message: 'Payment uploaded successfully', file: screenshot });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ uploadedAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch payments' });
  }
};
