const express = require('express');

const router = express.Router();
const adminController = require('../controllers/adminControllers.js');

// router.get('/adminReg', adminController.admin_reg);

// router.post('/newAdmin', adminController.admin_save)

router.get('/admin', adminController.get_admin_page);

router.post('/admin', adminController.authAdmin);

module.exports = router;
