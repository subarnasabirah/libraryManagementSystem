const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


app.use(bodyParser.json());

//Import AuthRoute

const authRoute = require('./routes/auth');



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

 //Middleware
app.use(cookieParser());
app.use(cors({
    credentiale: true,
    origin: ['http://localhost:3000', 'http//localhost:8080', 'http//localhost:3000']
}));
app.use(express.json());
 //Route Middlewares
app.use('/api/user', authRoute);





//How to we start lsitening to the server

app.listen(5000);