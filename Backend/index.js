const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/node_auth', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, () => {
    console.log('connected to the database');
})

const routes = require('./routes/routes')

const app = express();

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000','http://localhost:8080', 'http://localhost:4200']
}));

app.use(express.json());

app.use('/api', routes);

app.listen(8000);

