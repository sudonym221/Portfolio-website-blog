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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
});

// auth token middleware
const auth = (req, res, next) => {
    try {
        console.log('Hi')
        console.log(req.cookies);
        
        var token = req.cookies.token_admin ;
        console.log(req.cookies.token_admin);

        var decoded = jwt.verify(token, 'shhhhh');
        // console.log(decoded) // bar
        if (!(decoded.foo == '')) {
            const adminFound = Admin.findOne({
                'tokens.token': token
            })

            if (!adminFound) {
                return new Error('not admin');
            }
            req.user = true;
        } else {
            throw new Error
        }

        next();
    } catch (err) {
        console.log(err);
        res.status(404).render('1-404.ejs', {
            title: '404'
        });
    }
}

// Generate auth token
adminSchema.methods.generateAuthToken = function (req, res, next) {
    const admin = this;
    var token = jwt.sign({
        foo: 'bar'
    }, 'shhhhh', {
        expiresIn: '24 hours'
    });

    console.log('Token generated...................');

    //saving the token
    admin.tokens.push({
        token: token
    });
    admin.save().then(() => {
        console.log('token Saved...................');
        }); 
    return token;
}
const Admin = mongoose.model('Admin', adminSchema);

module.exports = {
    Admin,
    auth
};