const express = require('express');
const { createRegistrationForm } = require('../controllers/registrationFormController');
const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
const router = express.Router();

router.post('/fastTrackForm', createRegistrationForm);

router.post('/personal-info', createPersonalInfo);
router.get('/personal-info', getPersonalInfo);

module.exports = router;
