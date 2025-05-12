const Membership = require('../models/Membership');

exports.getAllMemberships = async (req, res) => {
  const plans = await Membership.find();
  res.json(plans);
};

exports.createMembership = async (req, res) => {
  const { planName, price, duration, description } = req.body;
  const plan = new Membership({ planName, price, duration, description });
  await plan.save();
  res.status(201).json(plan);
};
