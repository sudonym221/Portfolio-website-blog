const express = require("express");
// require('dotenv').config();
var morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Routers
const blogRouter = require('./routes/blogRoutes.js');
const workRouter = require('./routes/workRoutes.js');



// Express app
const app = express();

// Connect to mongodb
const mongoURI = 'mongodb://127.0.0.1:27017/Deepjyoti_Chetia';
mongoose.connect(mongoURI, {useNewUrlParser : true, useUnifiedTopology : true} )
    .then( result => app.listen(3000))
    .catch( (err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended: false }))


// Site routes
app.get('/', (req, res) => {
    res.render('home.ejs', {title : 'Home'});
});

app.get('/about', (req, res) => {
    res.render('1-a.ejs', {title : 'About me'})
});

// Blog routes
app.use(blogRouter, function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  });

// Work routes
app.use(workRouter, function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  });    

//404 page
app.use((req, res) => {
    res.status(404).render('1-404.ejs', { title : '404'})
})