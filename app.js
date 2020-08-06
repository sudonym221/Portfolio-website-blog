const express = require("express");
require('dotenv').config();
var morgan = require('morgan');
const mongoose = require('mongoose');
var cookieParser = require('cookie-parser')

// Express app
const app = express();

// Routers
const blogRouter = require('./routes/blogRoutes.js');
const workRouter = require('./routes/workRoutes.js');
const adminRouter = require('./routes/adminRoutes.js');

// Connect to mongodb
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0isbr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
//const mongoURI = 'mongodb://127.0.0.1:27017/Deepjyoti_Chetia';

mongoose.connect(mongoURI, {useNewUrlParser : true, useUnifiedTopology : true} )
    .then( result => app.listen(process.env.PORT))
    .catch( (err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('tiny'));
app.use(cookieParser());


// Site routes
app.get('/', (req, res) => {
    res.render('home.ejs', {title : 'Home'});
});

// Blog routes
app.use(blogRouter, function (req, res, next) {
    //console.log('Time:', Date.now())
    next()
  });

// Work routes
app.use(workRouter, function (req, res, next) {
    //console.log('Time:', Date.now())
    next()
  }); 

// Admin routes
app.use(adminRouter, function (req, res, next) {
    //console.log( 'Time:', Date.now().getTime() )
    next()
  });

//404 page
app.use((req, res) => {
    res.status(404).render('1-404.ejs', { title : '404'})
})