// routes/users.js
const express             = require('express');
const router              = express.Router();
const requireAdminJWT     = require('../middlewares/requireAdminJWT');
const usersController     = require('../controllers/usersController');

router.get('/',    requireAdminJWT, usersController.getAll);
router.delete('/:id', requireAdminJWT, usersController.remove);

module.exports = router;
