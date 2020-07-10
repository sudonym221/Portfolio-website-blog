const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// this is schema
const blogSchema = new Schema({
    title : {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

//this is modelling the above schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;