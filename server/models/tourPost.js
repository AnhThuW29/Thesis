const mongoose = require('mongoose')

const tourPostSchema = mongoose.Schema({
    title: {    // Hiển thị tiêu đề
        type: String, required: true, trim: true
    },
    content: {  // Thông tin địa điểm
        type: String, required: true, trim: true
    },
    place: {    // Địa điểm hiển thị trên card
        type: String, required: true, trfim: true
    },
    city: {
        type: String, required: true, trim: true
    },
    tags: [String],
    schedule: { type: String, required: true, trim: true},
    guider: {
        type: String, default: 'Admin', ref: 'Auth'
    },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    range: { type: Number },
    price: { type: String, required: true },
    // slug: {
    //     type: String, 
    //     // required: true, trim: true, unique: true
    // },
    thumbnail: {    // Hình ảnh hiển thị
        type: Object,
        url: {
            type: URL,
        },
        public_id: {
            type: String,
        }
    },
    // image: {     // Thêm nhiều hình
    //     type: Object,
    //     url: {
    //         type: URL,
    //     },
    // },
}, {
    timestamps: true
})

module.exports = mongoose.model('tourPost', tourPostSchema)