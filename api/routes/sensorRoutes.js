const express = require('express');
const router = express.Router();

const registrationController = require('../controllers/registrationController');
const adminController = require('../controllers/adminController');
const querySensorDataController = require('../controllers/querySensorData');
router.post('/sensor/register', registrationController.sensorRegistration);
router.get('/sensor/display', adminController.displayAllSensorDetails);
router.get('/sensor/metric-display/:id', adminController.displaySensorMetrics);
router.get('/sensor/display-list', querySensorDataController.displaySensorList);
router.post('/sensor/query-data', querySensorDataController.displayQueryData)
module.exports = router;