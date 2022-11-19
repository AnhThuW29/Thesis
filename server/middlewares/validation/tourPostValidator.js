const { check, validationResult } = require('express-validator')

exports.postValidate = [
    check('title').trim().not().isEmpty().withMessage('Tiêu đề không tìm thấy'),
    check('content').trim().not().isEmpty().withMessage('Nội dung không tìm thấy'),
    check('place').trim().not().isEmpty().withMessage('Địa điểm không tìm thấy'),
    check('city').trim().not().isEmpty().withMessage('Thành phố không tìm thấy'),
    check('price').trim().not().isEmpty().withMessage('Giá tiền không tìm thấy'),
    check('startDate').trim().not().isDate().withMessage('Ngày đi không tìm thấy'),
    check('endDate').trim().not().isDate().withMessage('Ngày về không tìm thấy'),
    check('range').trim().not().isEmpty().withMessage('Ngày về không tìm thấy'),
    // check('slug').trim().not().isEmpty().withMessage('Slug không tìm thấy'),
    check('schedule').trim().not().isEmpty().withMessage('Lịch trình không tìm thấy'),
    check('email')
        .normalizeEmail()
        .isEmail()
        .withMessage('Email không hợp lệ'),
    check('phone')
        .trim()
        .not()
        .isEmpty()
        .withMessage('Bạn cần nhập số điện thoại'),
    check('tags')
        .isArray()
        .withMessage('tags...')
        .custom((tags) => {
            for (let t of tags) {
                if (typeof t != 'string') {
                    throw Error('Tags phải là một mảng của chuỗi')
                }
            }
            return true
        })
]

exports.validation = (req, res, next) => {
    const error = validationResult(req).array()
    if (error.length) {
        return res.status(401).json({ error: error[0].msg })
    }
    next()
}