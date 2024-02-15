const { User, Thought } = require('../models');

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('thoughts').populate('friends');
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

