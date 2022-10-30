const { check, validationResult } = require('express-validator')

exports.validateUserSignUp = [
    check('fullname').trim().not()
        .isEmpty()
        .withMessage('Tên tài khoản không được để trống')
        .isString()
        .withMessage('Tên tài khoản phải bao gồm chữ và số')
        .isLength({ min: 3, max: 20 })
        .withMessage('Tên tài khoản phải lớn hơn 3 và nhỏ hơn 20 ký tự'),
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Email không hợp lệ'),
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Bạn cần nhập số điện thoại'),
    check('password').trim().not()
        .isEmpty().withMessage('Mật khẩu không được để trống')
        .isLength({ min: 3, max: 20 })
        .withMessage('Mật khẩu phải lớn hơn 3 và nhỏ hơn 20 ký tự'),
    // check('confirmPassword').trim().not().isEmpty().custom((value, { req }) => {
    //     if (value !== req.body.password) {
    //         throw new Error('Không  giống mật khẩu trên')
    //  }
    //  return true
    //})
]

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array()
    
    // Nếu ko có sẽ hiện lỗi
    if (!result.length) return next()
    
    const error = result[0].msg
    res.json({ success: false, message: error })
}

exports.validateUserSignIn = [
    check('email').trim()
        .isEmail()
        .withMessage('Nhập email và mật khẩu!'),

    check('password')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Nhập email và mật khẩu!')
]