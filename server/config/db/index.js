const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Our db is connected!')
    })
    .catch(err => console.log(err.message))

