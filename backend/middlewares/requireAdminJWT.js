// middlewares/requireAdminJWT.js
const jwt      = require('jsonwebtoken');
const ApiError = require('../utils/apiError');

module.exports = function requireAdminJWT(req, res, next) {
  const auth = req.headers.authorization || '';
  const [scheme, token] = auth.split(' ');
  if (scheme !== 'Bearer' || !token) {
    return next(new ApiError(401, 'Missing or invalid Authorization header'));
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'admin') {
      throw new Error('Not an admin');
    }
    // attach admin info if needed
    req.admin = payload;
    next();
  } catch (err) {
    next(new ApiError(401, 'Invalid or expired admin token'));
  }
};
