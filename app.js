const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Import Routes
const bookslistRoute = require('./routes/bookslist');

app.use('/bookslist',  bookslistRoute);

//Routes
app.get('/', (req, res) => {
    res.send("This is home page")
});



 //Connect To DB
 mongoose.connect('mongodb://localhost:27017/librarymanagement', { useNewUrlParser: true }, (err) => {
    if (!err) {console.log('MongoDB Connection Succeeded')}
});


//How to we start lsitening to the server

app.listen(5000);