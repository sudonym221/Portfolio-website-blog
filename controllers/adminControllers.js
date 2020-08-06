const {Admin} = require('../models/admin.js');

const get_admin_page = (req, res) => {
    res.render('admins/adminLogin.ejs', {title : 'Admin Login'})
}

const authAdmin = async (req, res) => {
    let pass = req.body.password;

    const adminYes = await Admin.findOne({ password : pass }).exec()

    try{
        if(!adminYes){
            res.redirect('/admin');
        }
        var token = adminYes.generateAuthToken();
        res.cookie('token_admin', `${token}`, {domain: 'https://deepjyoti-portfolio.herokuapp.com/',secure: true, expires: new Date(Date.now() + 9000000), httpOnly: true })
        res.render('admins/admin.ejs', { title: 'Hi admin'});
    }
    catch(e) {
        res.status(500).send()
    }    
}

const admin_reg= (req, res) => {
    res.render('admins/adminReg.ejs')
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