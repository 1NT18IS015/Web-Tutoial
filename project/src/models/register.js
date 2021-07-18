const mongoose = require('mongoose');

const createAccount = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    myid:{
        type:String,
        required:true
    },
    account:{
        type:String,
        required:true
    }, 
    address:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true,
    }, 
    balance:{
        type:String,
        required:true
    } 
})

const Register = new mongoose.model("banks" , createAccount); //clgReg
module.exports = Register;