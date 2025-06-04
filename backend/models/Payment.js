const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  utr: { type: String, required: true },
  screenshot: { type: String, required: true },
  name: { type: String, required: false }, // optional if you collect name
  createdAt: { type: Date, default: Date.now }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
