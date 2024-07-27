const pyPapersDetails = require('../models/pyPapersDetails');

// Create a new pyPapersDetails document
const createPyPapersDetails = async (req, res) => {
  try {
    const newPyPapersDetails = new pyPapersDetails(req.body);
    await newPyPapersDetails.save();
    res.status(201).json(newPyPapersDetails);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all pyPapersDetails documents
const getAllPyPapersDetails = async (req, res) => {
  try {
    const details = await pyPapersDetails.find();
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = {
  createPyPapersDetails,
  getAllPyPapersDetails,
};
