const mongoose = require('mongoose');
const Flights = require('../models/flight-model');



const getFlights = async (data,res) => {
try {
    console.log("before connect");
    console.log(data);
    await mongoose.connect(process.env.URI);
    console.log("connected");
    const flight = await Flights.find({departure: data.departure , destination: data.destination, departureDate: data.departureDate, returnDate: data.returnDate});
    mongoose.connection.close();
    console.log(flight);
    console.log("closed");
    return flight;
} catch (err) {
    console.log(err);
}
}


module.exports = {
    getFlights
}

