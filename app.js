const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const connection = require('./models/connection');
const catatanController = require('./controllers/catatan');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.use(cors());

app.use('/api/catatan',catatanController);

app.listen(PORT,()=>{
    console.log(`Application running on port ${PORT}`);
});