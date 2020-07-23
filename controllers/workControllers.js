const Work = require('../models/work.js')
const { forEach } = require('lodash');
const fs = require('fs');

// work_index, work_details, work_create_post, work_posting

const work_create_post = (req, res) => {
    res.render('works/newWork.ejs', { title: 'New work post'});
}

const workData_save_db = (req, res) => {

    const work = new Work({
        title: req.body.title,
        snippet: req.body.snippet,
        description: req.body.body
    })

    work.save()
    .then(result => {
        console.log(result)
        res.redirect('/myWorks')
    })
    .catch(err => {
        console.log(err)
    })
}

const my_work = (req, res) => {
    Work.find()
    .then(result => {
        res.render('works/workIndex.ejs', { title : 'All work', work : result});
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    work_create_post,
    workData_save_db,
    my_work,
}