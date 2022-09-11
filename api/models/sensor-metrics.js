const mongoose = require('mongoose');

var SensorMetrics = mongoose.model('SensorMetrics', {
    sensorID: {type: Number},
    temperature: {type: String},
    humidity: {type: String},
    windSpeed: {type: String},
    time: {type: Date}
},'metrics');


module.exports = { SensorMetrics };
