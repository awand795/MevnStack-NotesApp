const mongoose = require('mongoose');

const catatanSchema = new mongoose.Schema({
    judul: {
        type: String,
        required
    },
    isiCatatan: {
        type: String,
        required
    }
});

mongoose.model('Catatan',catatanSchema);