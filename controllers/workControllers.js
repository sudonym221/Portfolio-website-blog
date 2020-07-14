const Work = require('../models/work.js')
// work_index, work_details, work_create_post, work_posting

const work_index = (req, res) => {

}

const work_create_post = (req, res) => {
    res.render('works/newWork.ejs', { title: 'New work post'});
}

module.exports = {
    work_create_post
}