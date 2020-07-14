const express = require('express');

const router = express.Router();
const workController = require('../controllers/workControllers.js');

router.get('/newWork', workController.work_create_post);

module.exports = router;