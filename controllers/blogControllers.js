const Blog = require('../models/blog.js')
// blog_index, blog_details, blog_create_post, blog_posting

const blog_index = (req, res) => {
    Blog.find()
    .then((result) => {
        res.render('blogs/1.ejs', { title : 'my Blogs', blogs : result})
    })
    .catch((err) => {
        res.send(err);
    })
}

const blog_create_post = (req, res) => {
    res.render('blogs/1-newBlog.ejs', { title : 'New blog'})
}

const blog_details = (req, res) => {
    const id = req.params.id;

    Blog.findById(id)
    .then(result => {
      res.render('blogs/1-single.ejs', { blog : result, title : 'My post'});  
    })
    .catch(err => {
        res.status(404).render('1-404.ejs', { title : 'Blog not found' });
    })
}

const blog_posting = (req, res) => {
    // res.send(req.body);
    // console.log(req.body);

    const blog = new Blog(req.body);

    blog.save()
    .then((result) => res.redirect('/blog'))
    .catch((err) => console.log(err))   
}

module.exports = {
    blog_index, 
    blog_details, 
    blog_create_post, 
    blog_posting
}