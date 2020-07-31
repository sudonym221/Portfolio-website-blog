const mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
const {
    LocalStorage
} = require('node-localstorage');
var localStorage = new LocalStorage('./scratch');


const Schema = mongoose.Schema;

const adminSchema = new Schema({
    password: {
        type: String
    }
});

// auth token
const auth = (req, res, next) => {
    try {
        var token = localStorage.getItem('Authorization');  
        var decoded = jwt.verify(token, 'shhhhh');
        // console.log(decoded) // bar
        if(!(decoded.foo == '')){
            req.user = true;
        }
        else { throw new Error}

        next();
    } catch (err) {
        console.log(err);
        res.status(404).render('1-404.ejs', { title : '404'});
    }
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
    Admin,
    auth
};