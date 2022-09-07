const { request, response } = require('express');
const express = require('express');

var router = express.Router();

var { Sensor } = require('../models/sensor');exports.displayAllSensorDetails = (request, response) => { 

    Sensor.find((err, doc) => {
        if(!err) {
            response.status(200).json({
                'data': doc,
                'status': 'success',
                'response': 200
              })
        }
        else {
            console.log("Error in registering sensor details: "+JSON.stringify(err, undefined, 2));
            response.status(500).json({
                'message': 'Error in fetching sensor details',
                'error': err,
                'response': 500
            })
        }
    })
}