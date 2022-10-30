const express = require('express')
const router = express.Router()
const { createPost } = require('../controllers/PostController')
const multer = require('../middlewares/multer')
const { postValidate, validation } = require('../middlewares/validation/postValidator')

router.post(
    '/create', 
    multer.single('thumbnail'), 
    (req, res, next) => {
        const { tags } = req.body
        if( tags )  req.body.tags = JSON.parse(tags)

        next()
    },
    postValidate,
    validation, 
    createPost
    )
// router.get('/api/post/latest')

module.exports = router
