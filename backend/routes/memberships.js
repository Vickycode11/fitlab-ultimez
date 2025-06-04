// routes/memberships.js
const express                   = require('express');
const router                    = express.Router();
const requireAdminJWT           = require('../middlewares/requireAdminJWT');
const membershipsController     = require('../controllers/membershipsController');

router.get('/',    requireAdminJWT, membershipsController.getAll);
router.put('/:id', requireAdminJWT, membershipsController.update);

module.exports = router;
