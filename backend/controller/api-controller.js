const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const user = require('../models/user-model');
const flight = require('../models/flight-model');
const reservation = require('../models/reserve-model');
require('dotenv').config();

let isLogged = false;
let isCreated = false;

const createUser = async (req,res) => {
        try{
        await mongoose.connect(process.env.ATLAS_URI);
        if(req.body.name === await user.findOne({username: req.body.name})){
            isCreated = true;
        }else{
            const salt = await bcrypt.genSalt();
            const password = await bcrypt.hash(req.body.password, salt);
            const username = req.body.name;
            console.log("uname: " + username);
            const User = new user({username,password});
            console.log(User);
            await User.save();
            isCreated = true;
        }
        mongoose.connection.close();
        return isCreated;
        }catch(err){
            console.log(err);
        }
}

const login = async (req,res) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        //const User = user.find(User => User.username === req.body.name);
        const User = await user.findOne({username: req.body.name});
        if(User === null){
            return isLogged;
        }
        if(await bcrypt.compare(req.body.password, User.password)) {
            isLogged = true;
            return isLogged;
        }else{
            return isLogged;
        }
    }catch(err){
        console.log(err);
    }
}

const getUser = async(req,res) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const User = await user.findOne({username: req.body.name});
        console.log(User);
        await mongoose.connection.close();
        return User;
    }catch(err){
        console.log(err);
    }
}

const getReservation = async(req,res) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const User = await user.findOne({username: req.body.name});
        const reservations = User.reservation;
        await mongoose.connection.close();
        return reservations;
    }catch(err){
        console.log(err);
    }
}

const makeRes = async(req,res) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const User = await user.findOne({username: req.body.name});
        //console.log(User);
        const depQuery = mongoose.Types.ObjectId(req.body.departure);
        const destQuery = mongoose.Types.ObjectId(req.body.destination);
        const goingFlight = await flight.findOne({_id:depQuery});
        const returnFlight = await flight.findOne({_id: destQuery});
        const cost = (goingFlight.pricePerSeat * req.body.passengers) + (returnFlight.pricePerSeat * req.body.passengers);
        //console.log(cost);
        const reserve = new reservation({
            departureFlight: goingFlight,
            destinationFlight: returnFlight,
            numberPax: req.body.passengers,
            priceTotal: cost
        });
        await reserve.save();
        const r1 = await reservation.findOne({username: req.body.name});
        //console.log(r1);
        User.reservation.push(r1._id);
        await User.save();
        //console.log(User);
        await mongoose.connection.close();
    }catch(err){
        console.log(err);
    }
}

const deleteRes = async(req,res) => {
    try{
        await mongoose.connect(process.env.ATLAS_URI);
        const User = await user.findOne({username: req.body.name});
        const id = new mongoose.Types.ObjectId(req.body.id);
        console.log(await reservation.findOne(id));
        // const data = await user.updateMany(
        //     {username: req.body.name},
        //     {$pull:{reservation:{_id: id}}},
        //     {new: true}
            
        //     //{$pullAll:{uid:{id}}}
        // ).exec();
        User.reservation = User.reservation.filter(reserve => {
            return !reserve._id.equals(id);
        });
        await User.save();
        await mongoose.connection.close();
        //console.log(data);
        return;
    }catch(err){
        console.log(err);
    }
}


module.exports = {
    //controllers go out here
    createUser,
    login,
    getUser,
    getReservation,
    makeRes,
    deleteRes
}