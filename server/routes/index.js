const express = require('express');
const { createRegistrationForm } = require('../controllers/registrationFormController');

const router = express.Router();

router.post('/fastTrackForm', createRegistrationForm);

module.exports = router;
