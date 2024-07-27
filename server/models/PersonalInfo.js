// models/PersonalInfo.js
const mongoose = require('mongoose');

const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  number: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true }
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
