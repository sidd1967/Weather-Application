const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registrationController');
const adminController = require('../controllers/adminController');

router.post('/sensor/register', registrationController.sensorRegistration);
router.get('/sensor/display', adminController.displayAllSensorDetails)

module.exports = router;