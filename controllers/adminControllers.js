const {Admin} = require('../models/admin.js');
var jwt = require('jsonwebtoken');
const {LocalStorage} = require('node-localstorage');
var localStorage = new LocalStorage('./scratch');

const get_admin_page = (req, res) => {
    res.render('adminLogin.ejs', {title : 'Admin Login'})
}

const authAdmin = async (req, res) => {
    let pass = req.body.password;

    const adminYes = await Admin.findOne({ password : pass }).exec()

    try{
        if(!adminYes){
            res.redirect('/admin');
        }
        var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
        localStorage.setItem('Authorization', token);

        res.render('admin.ejs', { title: 'Hi admin'});
    }
    catch(e) {
        res.status(500).send()
    }    
}

const admin_reg= (req, res) => {
    res.render('adminReg.ejs')
}

const admin_save = (req, res) => {
    const admin = new Admin( {password : req.body.password} );

    admin.save()
    .then(result => { res.send('Success') })
    .catch(err => { return res.status(404).send() })
}

module.exports = {
    authAdmin,
    get_admin_page,
    admin_reg,
    admin_save
}