const Work = require('../models/work.js')
const multer = require('multer');
const { forEach } = require('lodash');

// work_index, work_details, work_create_post, work_posting

const work_index = (req, res) => {

}

const work_create_post = (req, res) => {
    res.render('works/newWork.ejs', { title: 'New work post'});
}


const workData_save_db = (req, res, next) => {
    let finalArr = [];
    let arr = req.files.ssUpload;
    arr.forEach(element => {
        finalArr.push(element.mimetype)
    });

    const work = new Work({
        contentTypeIcon: req.files.iconUpload[0].mimetype,
        contentTypeSS: finalArr,
        destination: req.files.iconUpload[0].destination,
        title: req.body.title,
        snippet: req.body.snippet,
        description: req.body.body
    })
    work.save()
    .then(result => {
        console.log(result)
        //res.send(result)
    })
    .catch(err => {
        console.log(err)
        res.send(err)})
    //res.redirect('works/workIndex.ejs')
    next();
}

const my_work = (req, res) => {
    res.send('aha')
    // mongoose code
    //res.render('works/workIndex.ejs', mongoObject);
}

module.exports = {
    work_create_post,
    workData_save_db,
    my_work
}