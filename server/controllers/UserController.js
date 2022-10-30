const User = require('../models/user')
// const jwt = require('jsonwebtoken')

exports.createUser = async (req, res) => {
    const {fullname, email, phone, password} = req.body
    const isNewUser = await User.isThisEmailInUse(email)
    if(!isNewUser){
        return res.json({
            success: false,
            message: 'Email này đã được sử dụng, hãy thử email khác!'
        })
    }
    const user = await User({
        fullname,
        email,
        phone,
        password, 
    })
    await user.save()
    res.json(user)
}

exports.userSignIn = async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({email})
    if( !user )
        return res.json({success: false, message: 'Không tìm thấy người dùng!'})
    
    const isMatch = await user.comparePassword(password)
    if( !isMatch ) 
        return res.json({success: false, message: 'Email hoặc mật khẩu không đúng!'})

    const userInfo = {
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
    }

    res.json({success: true, user: userInfo})
}