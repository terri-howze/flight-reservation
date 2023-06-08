const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Flight = new Schema({
    departureLocation: String,
    destinationLocation: String,
    departureTime: Date,
    arrivalTime: Date,
    airline: String,
    maxCapacity: Number,
    seatsTaken: Number,
    airplaneType: String,
    pricePerSeat: Number,
    layover: {
        isTrue: Boolean,
        time: Date,
        count: Number,
        stops: [String]
    }
});

const flight = mongoose.model('flight', Flight);
module.exports = flight;
