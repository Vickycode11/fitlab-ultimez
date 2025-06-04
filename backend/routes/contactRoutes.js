const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res, next) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (err) {
    next(err);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
