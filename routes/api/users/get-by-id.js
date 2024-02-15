const express = require('express');
const router = express.Router();
const { getUserById } = require('../../../controllers/user');

router.get('/:id', getUserById);

module.exports = router;