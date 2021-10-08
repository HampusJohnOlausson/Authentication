const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, () => {
    console.log('connected to the database');
})

const routes = require('./routes/routes')

app.use('/api', routes);


app.listen(8000);

