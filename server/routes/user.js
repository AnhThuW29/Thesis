const express = require('express')
const router = express.Router()
const { createUser, userSignIn } = require('../controllers/UserController')
const { validateUserSignUp, validateUserSignIn, userValidation } = require('../middlewares/validation/user')

router.post('/create-user', validateUserSignUp, userValidation, createUser)

router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)

module.exports = router