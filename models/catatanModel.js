const mongoose = require('mongoose');

const catatanSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    note: {
        type: String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
});

mongoose.model('Catatan',catatanSchema);