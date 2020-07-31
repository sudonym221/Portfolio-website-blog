const express = require('express');

const router = express.Router();
const blogController = require('../controllers/blogControllers.js');
const {auth} = require('../models/admin.js');

router.get('/blog', blogController.blog_index);

router.get('/create', auth,blogController.blog_create_post);

//Submitting blog data

router.post('/blog', auth, blogController.blog_posting)

router.get('/blog/:id', blogController.blog_details)

module.exports = router;