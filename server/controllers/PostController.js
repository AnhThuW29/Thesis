const Post = require('../models/post')


exports.createPost = async (req, res, next) => {
    try {
        const { title, content, meta, slug, tags, guider } = req.body
        const post = new Post({ title, content, meta, slug, tags, guider })

        await post.save()

        res.json(post)
    } catch (error) {
        next(error)
    }
}