const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registrationController');

router.post('/sensor/register', registrationController.sensorRegistration);

module.exports = router;