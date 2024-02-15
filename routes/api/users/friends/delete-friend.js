// * `DELETE` to remove a friend from a user's friend list
const express = require('express');
const router = express.Router();
const { removeFriend } = require('../../../../controllers/friend');

router.delete('/:friendId', removeFriend);

module.exports = router;