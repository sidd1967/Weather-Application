const { request, response } = require('express');
const express = require('express');

var router = express.Router();

var { Sensor } = require('../models/sensor');


exports.sensorRegistration = async(request, response) => {

var sensorDetails = new Sensor ({
    sensorID: request.body.sensorID,
    sensorCountry: request.body.country,
    sensorCity: request.body.city
});

sensorDetails.save((err, doc) => {
    if(!err) {
        response.status(200).json({
            'message': doc,
            'status': 'success',
            'response': 200
          })
    }
    else {
        console.log("Error in registering sensor details: "+JSON.stringify(err, undefined, 2));
        response.status(500).json({
            'message': 'Error in registering sensor details',
            'error': err,
            'response': 500
          })
    }
})

}