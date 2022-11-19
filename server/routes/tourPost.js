const express = require('express')
const router = express.Router()
const { createPost, updatePost, deletePost, 
    getPost, getFeaturedPosts, getLatestPosts, searchPost, relatedPosts, uploadImage } = require('../controllers/TourPostController')
const { parseData } = require('../middlewares')
const multer = require('../middlewares/multer')
const { postValidate, validation } = require('../middlewares/validation/tourPostValidator')

router.post(
    '/create-tour',
    multer.single('thumbnail'),
    parseData,
    postValidate,
    // validation,
    createPost
)

router.put(
    '/:postId',
    multer.single('thumbnail'),
    parseData,
    postValidate,
    validation,
    updatePost
)

router.delete('/:postId', deletePost)
// router.get('/single/:slug', getPost)
router.get('/featured-posts', getFeaturedPosts)
router.get('/latest-posts', getLatestPosts)
router.get('/search-post', searchPost)
router.get('/related-posts/:postId', relatedPosts)


router.post(
    '/upload-image',
    multer.single('image'),
    uploadImage
)


module.exports = router
