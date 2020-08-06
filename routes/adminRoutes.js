const express = require('express');

const router = express.Router();
const adminController = require('../controllers/adminControllers.js');
const {auth} = require('../models/admin.js');

router.get('/adminReg', auth, adminController.admin_reg);

router.post('/newAdmin', auth, adminController.admin_save)

router.get('/admin', adminController.get_admin_page);

router.post('/admin', adminController.authAdmin);

module.exports = router;
