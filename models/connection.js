const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://awand795:awanda21345@cluster0-i1501.mongodb.net/note?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology : true},(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to databases");
    }
});

const Catatan = require('./catatanModel');