const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  plan:  { type: String, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
