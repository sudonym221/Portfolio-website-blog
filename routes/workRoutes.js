const express = require('express');
const multer = require('multer');

var upload = multer({ dest: 'uploads/' })

const router = express.Router();
const workController = require('../controllers/workControllers.js');
const workControllers = require('../controllers/workControllers.js');

router.get('/newWork', workController.work_create_post); // new work post form

const workUpload = upload.fields([ {name: 'iconUpload', maxCount:1}, {name: 'ssUpload', maxCount: 5}]);
router.post('/newWork', workUpload, workController.workData_save_db); // saving work post

router.get('/myWorks', workControllers.my_work) // index route



module.exports = router;