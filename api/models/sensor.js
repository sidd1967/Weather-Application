const mongoose = require('mongoose');

var Sensor = mongoose.model('Sensor', {
    sensorID: {type: Number},
    sensorCountry: {type: String},
    sensorCity: {type: String}
},'Sensor-Data');


module.exports = { Sensor };
