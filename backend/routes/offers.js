const express = require('express');
const router = express.Router();

const requireAdminJWT = require('../middlewares/requireAdminJWT');
const offersController = require('../controllers/offersController'); // ✅ Add this line

// Admin-protected route to create an offer
router.post('/', requireAdminJWT, offersController.create);

// Public route to get all offers
router.get('/', offersController.getAll);

module.exports = router;
