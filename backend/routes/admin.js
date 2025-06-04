// routes/admin.js
const express  = require('express');
const jwt      = require('jsonwebtoken');
const ApiError = require('../utils/apiError');
const router   = express.Router();

// POST /api/admin/login
router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  // Validate payload
  if (!email || !password) {
    return next(new ApiError(400, 'Email and password are required'));
  }

  // Check against your .env credentials
  if (
    email !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return next(new ApiError(401, 'Invalid admin credentials'));
  }

  // On success, issue a JWT (expires in 1h)
  const token = jwt.sign(
    { role: 'admin', email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

module.exports = router;
