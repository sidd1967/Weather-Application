const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sensorRoutes = require('./routes/sensorRoutes');
const { mongoose } = require('./dbconnection.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, ()=> console.log("Server Running on Port: 3000"));
app.use('/weatherapp', sensorRoutes) //sensorEndpoints