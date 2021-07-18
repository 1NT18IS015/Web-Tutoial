const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bms',{
    useNewUrlParser: true , 
    useUnifiedTopology:true , 
    useCreateIndex:true 
}).then(() => {
    console.log('Connection Successfull');
}).catch((e) => {
    console.log('No Connection');
})