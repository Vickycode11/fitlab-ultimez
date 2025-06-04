// controllers/usersController.js
const User     = require('../models/User');
const ApiError = require('../utils/apiError');

exports.getAll = async (req, res, next) => {
  try {
    const users = await User.find().select('-password'); // omit password
    res.json(users);
  } catch (err) {
    next(new ApiError(500, 'Failed to fetch users'));
  }
};

exports.remove = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch {
    next(new ApiError(500, 'Failed to delete user'));
  }
};
