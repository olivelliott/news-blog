const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = require('./User')

const articleSchema = {
    title: {
        type: String,
        required: true,
        trim: true
    },
    overview: {
        type: String,
        trim: true
    },
    image: {
        type: String,
    },
    datePosted: {
        type: Date,
        default: Date.now
    },
    user: [User.schema]
}

const Article = mongoose.model('Article', articleSchema);

module.exports = Article;