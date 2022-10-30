const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const user = {
    fullname: '',
    email: '',
    phone: '',
    password: '',
}

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true},
    password: { type: String, required: true },
})

userSchema.pre('save', function(next) {
    if(this.isModified('password')) {
        bcrypt.hash(this.password, 8, (err, hash) => {
            if(err) return next(err)

            this.password = hash
            next()
        })
    }
})

userSchema.methods.comparePassword = async function (password) {
    if(!password)   throw new Error('Password is mission, can not compare!')

    try {
        const result = await bcrypt.compare(password, this.password)
        return result
    } catch (err) {
        console.log('Error while compare password!', err.message)
    }
}

userSchema.statics.isThisEmailInUse = async function(email) {
    try {
        const user = await this.findOne({email})
        if(user) return false

        return true
    } catch (err) {
        console.log('error', err.message)
        return false
    }
}

module.exports = mongoose.model('User', userSchema )