const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, () => {
    console.log('connected to the database');
})

const routes = require('./routes/routes')

const app = express();
app.use(express.json());

app.use('/api', routes);


app.listen(8000);

