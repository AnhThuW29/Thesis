const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    title: { type: String },
    email: { type: String},
    phone: { type: Number},
})

module.exports = mongoose.model('test', testSchema )
