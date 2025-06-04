const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
