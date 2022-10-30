const { check, validationResult } = require('express-validator')

exports.postValidate = [
    check('title').trim().not().isEmpty().withMessage('Tiêu đề không tìm thấy'),
    check('content').trim().not().isEmpty().withMessage('Nội dung không tìm thấy'),
    check('meta').trim().not().isEmpty().withMessage('Mô tả không tìm thấy'),
    check('slug').trim().not().isEmpty().withMessage('Slug không tìm thấy'),
    check('tags')
        .isArray()
        .withMessage('tags phải là một mảng của chuỗi')
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