const { User, Thought } = require('../models');

// get all thoughts
exports.getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (error) {
    res.status(500).send(error.message);
  }
};