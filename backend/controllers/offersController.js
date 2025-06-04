const Offer = require('../models/Offer');
const ApiError = require('../utils/apiError');

exports.getAll = async (req, res, next) => {
  try {
    const offers = await Offer.find().sort('-createdAt');
    res.json(offers);
  } catch (err) {
    next(new ApiError(500, 'Failed to fetch offers'));
  }
};

exports.create = async (req, res, next) => {
  try {
    const offer = await Offer.create(req.body);
    res.status(201).json(offer);
  } catch (err) {
    next(new ApiError(400, 'Invalid offer data'));
  }
};

exports.update = async (req, res, next) => {
  try {
    const offer = await Offer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!offer) throw new Error();
    res.json(offer);
  } catch {
    next(new ApiError(404, 'Offer not found'));
  }
};

exports.remove = async (req, res, next) => {
  try {
    await Offer.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch {
    next(new ApiError(404, 'Offer not found'));
  }
};
