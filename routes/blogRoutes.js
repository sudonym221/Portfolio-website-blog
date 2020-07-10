const express = require('express');

const router = express.Router();
const blogController = require('../controllers/blogControllers.js');

router.get('/', blogController.blog_index);

router.get('/create', blogController.blog_create_post);

//Submitting blog data

router.post('/', blogController.blog_posting)

router.get('/:id', blogController.blog_details)

module.exports = router;