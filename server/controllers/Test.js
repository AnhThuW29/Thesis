const Test = require('../models/test')

// Tạo post
exports.createPost = async (req, res, next) => {
    try {
        const { title, email, phone } = req.body

        const newPost = new Test({ title, email, phone })
        const save = await newPost.save()
        res.status(200).json(save)

    } catch (error) {
        next(error)
    }

}