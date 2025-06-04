// controllers/membershipsController.js
const Membership = require('../models/Membership');
const ApiError   = require('../utils/apiError');

exports.getAll = async (req, res, next) => {
  try {
    const plans = await Membership.find();
    res.json(plans);
  } catch {
    next(new ApiError(500, 'Failed to fetch plans'));
  }
};

exports.update = async (req, res, next) => {
  try {
    const plan = await Membership.findByIdAndUpdate(
      req.params.id,
      { price: req.body.price },
      { new: true }
    );
    if (!plan) throw new Error();
    res.json({ success: true, message: 'Price updated' });
  } catch {
    next(new ApiError(500, 'Failed to update price'));
  }
};
