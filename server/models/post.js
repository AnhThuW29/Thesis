const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {
        type: String, required: true, trim: true
    },
    content: {
        type: String, required: true, trim: true
    },
    meta: {
        type: String, required: true, trim: true
    },
    tags: [String],
    guider: {
        type: String, default: 'Admin', ref: 'Auth'
    },
    slug: {
        type: String, required: true, trim: true, unique: true
    },
    thumbnail: {
        type: Object,
        url: {
            type: URL,
        },
        public_id: {
            type: String,
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('post', postSchema)