const express = require('express')
const router = express.Router()
const { createPost } = require('../controllers/Test')
// const { postValidate  } = require('../middlewares/validation/test')

router.post(
    '/test-post',
    createPost,
)

module.exports = router
