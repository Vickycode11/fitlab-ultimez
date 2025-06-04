const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String },
  discount:    { type: Number, required: true },
  validUntil:  { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Offer', offerSchema);
