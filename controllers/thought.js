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

// get a single thought by _id
exports.getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) {
      return res.status(404).send('Thought not found');
    }
    res.json(thought);
  } catch (error) {
    res.status(500).send(error.message);
  }
};