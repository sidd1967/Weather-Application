const { request, response } = require('express');
const express = require('express');

var router = express.Router();

var { Sensor } = require('../models/sensor');
var { SensorMetrics } = require('../models/sensor-metrics');

exports.displaySensorList = (request, response) => { 

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
    }).select('sensorID');
}

exports.displayQueryData = (request, response) => { 

    let sensorList = request.body.selectedSensors;
    let fieldsList = request.body.selectedMetrics;
    let sDate = request.body.selectedStartDate;
    let [s_year, s_month, s_day] = sDate.split('-');
    let eDate = request.body.selectedEndDate;
    let [e_year, e_month, e_day] = eDate.split('-');

    let startDate = new Date(s_year, s_month-1, s_day);
    startDate.setUTCHours(0, 0, 0);
    
    let endDate = new Date(e_year, e_month-1, e_day);
    endDate.setUTCHours(0, 0, 0);
    
    SensorMetrics.find({sensorID: sensorList, time: {$gte: startDate, $lte: endDate}}, 
        (err, doc) => {
        if(!err) {
            response.status(200).json({
                'data': doc,
                'status': 'success',
                'response': 200
              })
        }
        else {
            console.log("Error in fetching sensor details: "+JSON.stringify(err, undefined, 2));
            response.status(500).json({
                'message': 'Error in fetching sensor details',
                'error': err,
                'response': 500
            })
        }
    }
    ).select(fieldsList);
}