const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
    },
    service: {
      type: String,
      required: [true, 'Service type is required'],
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    collection: 'contacts', // optional: custom collection name
    timestamps: true        // adds createdAt and updatedAt automatically
  }
);

module.exports = mongoose.model('Contact', contactSchema);
