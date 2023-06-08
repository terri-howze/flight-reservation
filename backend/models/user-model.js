const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('./reserve-model');

const User = new Schema({
    username: {type:String,required:true, unique:true},
    password: {type: String, require: true},
    reservation: [{type: Schema.Types.ObjectId, ref: 'reservations'}],
    payment: {
        ccNum: Number,
        ccExp: Date
    },
    homeAddress: {
        city: String,
        State: String
    }
});

const user = mongoose.model('user', User);
module.exports = user;