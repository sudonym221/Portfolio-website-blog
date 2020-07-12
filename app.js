const express = require("express");
var morgan = require('morgan');
const mongoose = require('mongoose');
const blogRouter = require('./routes/blogRoutes.js');


// Express app
const app = express();

// Connect to mongodb
const mongoURI = 'mongodb+srv://deep:XeU05a@cluster0.0isbr.mongodb.net/node-ninja?retryWrites=true&w=majority';
mongoose.connect(mongoURI, {useNewUrlParser : true, useUnifiedTopology : true} )
    .then( (result) => app.listen(3004))
    .catch( (err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');


// Middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( {extended: true} ));
app.use(morgan('tiny'))


// Site routes
app.get('/', (req, res) => {
    res.render('home.ejs', {title : 'Home'});
});

app.get('/about', (req, res) => {
    res.render('1-a.ejs', {title : 'About me'})
});

// Blog routes
app.use(blogRouter);

// 404 page
app.use((req, res) => {
    res.status(404).render('1-404.ejs', { title : '404'})
})