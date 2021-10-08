const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, () => {
    console.log('connected to the database');
})

app.get('/', (req, res) => {
    res.send('hello');
})

app.listen(8000);

