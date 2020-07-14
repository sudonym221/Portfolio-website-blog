const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    snippet: {
        type: String,
        required: true

    },
    description: String,
    icon: {
        type: 'Buffer',
        required: true
    },
    screenshots:{
        type: ['Buffer']
    }
}, { timestamps : true });
const Work = mongoose.model('Work', workSchema)
module.exports = Work;