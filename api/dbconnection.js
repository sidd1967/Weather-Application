const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sid01:WeatherApp123@cluster0.imxvi1u.mongodb.net/?retryWrites=true&w=majority',(err) => {
    if(!err) {
        console.log("MongoDB Connection Success.");
    }
    else {
        console.log("MongoDB Connection Error " + JSON.stringify(err, undefined, 2));
    }
})
module.exports = mongoose;