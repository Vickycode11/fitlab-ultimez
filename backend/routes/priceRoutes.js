const express = require('express');
const router = express.Router();
const Price = require('../models/priceModel');

router.get('/', async (req, res) => {
  const prices = await Price.find();
  res.json(prices);
});

router.post('/', async (req, res) => {
  const newPrice = new Price(req.body);
  await newPrice.save();
  res.status(201).json(newPrice);
});

router.put('/:id', async (req, res) => {
  const updated = await Price.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Price.findByIdAndDelete(req.params.id);
  res.json({ message: 'Price deleted' });
});

module.exports = router;
