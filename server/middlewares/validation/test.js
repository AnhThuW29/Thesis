const { check, validationResult } = require('express-validator')

exports.postValidate = [
    check('title').trim().not().isEmpty().withMessage('Tiêu đề không tìm thấy'),
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Email không hợp lệ'),
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Bạn cần nhập số điện thoại'),
]

exports.validation = (req, res, next) => {
    const error = validationResult(req).array()
    if (error.length) {
        return res.status(401).json({ error: error[0].msg })
    }
    next()
}