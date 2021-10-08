const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, () => {
    console.log('connected to the database');
})

const app = express();
const routes = require('./routes/routes')

app.use('/api', routes);


app.listen(8000);

