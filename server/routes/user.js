const express = require('express')
const router = express.Router()
const { createUser, userSignIn, getUser } = require('../controllers/UserController')
const { validateUserSignUp, validateUserSignIn, userValidation } = require('../middlewares/validation/user')

router.post('/create-user', validateUserSignUp, userValidation, createUser)

router.post('/sign-in', validateUserSignIn, userValidation, userSignIn)

router.get('/:id', getUser)

module.exports = router