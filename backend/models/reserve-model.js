const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reservation = new Schema({
    departureFlight:{
        type: Schema.Types.ObjectId, ref: 'flight'
    },
    destinationFlight:{
        type: Schema.Types.ObjectId, ref: 'flight'
    },
    numberPax: Number,
    priceTotal: Number
}); 

const reservation = mongoose.model('Reservation', Reservation);
module.exports = reservation;
