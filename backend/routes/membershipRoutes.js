const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');

// @route POST /api/memberships/register
// @desc Register a new gym member
router.post('/register', async (req, res) => {
  try {
    // Create a new member with the request body
    const newMember = new Membership(req.body);

    // Save the new member to the database
    await newMember.save();

    // Respond with success message
    res.status(201).json({ message: 'Membership Registered Successfully!' });
  } catch (error) {
    // Handle errors, such as validation or database issues
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
