const mongoose = require('mongoose')

const featuredPost = mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        require: true,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('FeaturedPost', featuredPost)