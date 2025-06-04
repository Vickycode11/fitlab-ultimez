const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., "Gold", "Silver"
  duration: { type: String, required: true }, // duration in months
  price: { type: Number, required: true } // price amount if needed
});

module.exports = mongoose.model('Price', priceSchema);
