const Work = require('../models/work.js')
const { forEach } = require('lodash');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// Cloudinary config
cloudinary.config({ 
    cloud_name: 'dr5u55z3y', 
    api_key: '484182257869957', 
    api_secret: '604YVQgTTi78WCRZNEo9_0XNExs' 
  });

// work_index, work_details, work_create_post, work_posting

const work_create_post = (req, res) => {
    res.render('works/newWork.ejs', { title: 'New work post'});
}

const workData_save_db = async (req, res) => {

    //config for cloud-Storage
    const path = req.files.iconUpload[0].path;
    const uniqueFilenameOfWorks = new Date().toISOString();

    var resultUrl = await cloudinary.uploader.upload(path, {public_id: `work/${uniqueFilenameOfWorks}`}, (error, result)=>{
        if(error){
            console.log(error);
        }else{
            console.log('Image files uploaded to cloudinary....');
        }
    });

    const work = new Work({
        title: req.body.title,
        snippet: req.body.snippet,
        description: req.body.body,
        imageUrlCloud: resultUrl.secure_url,
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