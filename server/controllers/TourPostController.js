const TourPost = require('../models/tourPost')
const FeaturedPost = require('../models/featuredPost')
const cloudinary = require('../cloud/index')
const { isValidObjectId } = require('mongoose')

// Post nổi bật
const FEATURED_POST_COUNT = 5
const addToFeaturedPost = async (postId) => {
    const isAlreadyExists = await FeaturedPost.findOne({ post: postId })

    if (isAlreadyExists)
        return

    const featuredPost = new FeaturedPost({ post: postId })
    await featuredPost.save()

    const featuredPosts = await FeaturedPost.find({}).sort({ createAt: -1 })
    featuredPosts.forEach(async (post, index) => {
        if (index >= FEATURED_POST_COUNT)
            await FeaturedPost.findByIdAndDelete(post._id)
    })
}

const removeFromFeaturedPost = async (postId) => {
    await FeaturedPost.findOneAndDelete({ post: postId })
}

const isFeaturedPost = async (postId) => {
    const post = await FeaturedPost.findOne({ post: postId })
    return post ? true : false
}

// Tạo post
exports.createPost = async (req, res, next) => {

    try {
        const { title, content, place, city, tags, guider, email, phone, startDate, endDate, range, price, featured, schedule } = req.body
        const post = new TourPost({ title, content, place, city, tags, guider, email, phone, startDate, endDate, range, price, featured, schedule })
        
        // const isAlreadyExists = await TourPost.findOne({ slug })
        // if (isAlreadyExists)
        // return res.status(401).json({ error: 'Sử dụng slug duy nhất' })
        
        const { file } = req
        if (file) {
            const { secure_url: url, public_id } = await cloudinary.uploader.upload(file.path)
            post.thumbnail = { url, public_id }
        }

        if (featured)
        await addToFeaturedPost(post._id)
        
        await post.save()

        res.json(post)

    } catch (error) {
        next(error)
    }
}

// Cập nhật post theo id
exports.updatePost = async (req, res) => {
    const { title, content, place, city, price, slug, tags, guider, email, phone, startDate, endDate, range, featured, schedule } = req.body
    const { file } = req
    const { postId } = req.params
    if (!isValidObjectId(postId))
        return res.status(401).json({ error: 'Yêu cầu không hợp lệ' })

    const post = await TourPost.findById(postId)
    if (!post)
        return res.status(404).json({ error: 'Không tìm thấy bài đăng' })

    // cần remove thumbnail cũ trong cloud trước r mới update
    const public_id = post.thumbnail?.public_id
    if (public_id && file) {
        const { result } = await cloudinary.uploader.destroy(public_id)
        if (result !== 'ok')
            return res.status(404).json({ error: 'Không thể xóa thumbnail' })
    }

    // nếu chưa có thumbnail thì thêm vào
    if (file) {
        const { secure_url: url, public_id } = await cloudinary.uploader.upload(file.path)
        post.thumbnail = { url, public_id }
    }

    post.title = title
    post.content = content
    post.place = place
    post.city = city
    post.price = price
    // post.slug = slug
    post.guider = guider
    post.tags = tags
    post.startDate = startDate
    post.endDate = endDate
    post.range = range
    post.email = email
    post.phone = phone
    post.schedule = schedule


    if (featured)
        await addToFeaturedPost(post._id)
    else
        await removeFromFeaturedPost(post._id)

    await post.save()

    res.json({
        post: {
            id: post._id,
            title,
            content,
            place,
            city,
            price,
            startDate,
            endDate,
            range,
            slug,
            // tags,
            thumbnail: post.thumbnail?.url,
            guider: post.guider,
            schedule,
            featured,
        }
    })
}

// Xóa post theo id
exports.deletePost = async (req, res) => {
    const { postId } = req.params
    if (!isValidObjectId(postId))
        return res.status(401).json({ error: 'Yêu cầu không hợp lệ' })

    const post = await TourPost.findById(postId)
    if (!post)
        return res.status(404).json({ error: 'Không tìm thấy bài đăng' })

    // check có thumbnail hay không thì delete khỏi cloud
    // const { public_id } = post.thumbnail?.public_id
    // if (public_id) {
    //     const { result } = await cloudinary.uploader.destroy(public_id)
    //     if (result !== 'ok')
    //         return res.status(401).json({ error: 'Không thể xóa thumbnail' })
    // }

    await TourPost.findByIdAndDelete(postId)
    await removeFromFeaturedPost(postId)
    res.json({ message: 'Post đã được xóa thành công' })

}

// Get single post by slug
exports.getPost = async (req, res) => {
    const { slug } = req.params
    if (!slug)
        return res.status(401).json({ error: 'Yêu cầu không hợp lệ' })

    const post = await TourPost.findOne({ slug })
    if (!post)
        return res.status(404).json({ error: 'Không tìm thấy bài đăng' })

    const featured = await isFeaturedPost(post._id)

    const { title, content, place, city, price, tags, guider, email, phone, startDate, endDate, range, schedule} = post

    res.json(post)
    //     post: {
    //         id: post._id,
    //         title,
    //         content,
    //         meta,
    //         tags,
    //         thumbnail: post.thumbnail?.url,
    //         guider: post.guider,
    //         featured,
    //         createAt
    //     }
    // })
}

// Get featured posts
exports.getFeaturedPosts = async (req, res) => {
    const featuredPosts = await FeaturedPost.find({})
        .sort({ createAt: -1 })
        .limit(5)
        .populate('post')

    res.json({
        posts: featuredPosts.map(({ post }) => ({
            id: post._id,
            title: post.title,
            content: post.content,
            place: post.place,
            city: post.city,
            price: post.price,
            slug: post.slug,
            thumbnail: post.thumbnail?.url,
            guider: post.guider,
            startDate: post.startDate,
            endDate: post.endDate,
            range: post.range,
            email: post.email,
            phone: post.phone,
        }))
    })
}

// Get latest posts
exports.getLatestPosts = async (req, res) => {
    const { pageN = 0, limit = 10 } = req.query

    const post = await TourPost.find({})
        .sort({ createAt: -1 })
        .skip(parseInt(pageN) * parseInt(limit))
        .limit(parseInt(limit))

    res.json(post)
    // res.json({
    //     post: post.map((post) => ({
    //         id: post._id,
    //         title: post.title,
    //         content: post.content,
    //         meta: post.meta,
    //         slug: post.slug,
    //         thumbnail: post.thumbnail?.url,
    //         author: post.author,
    //         createAt: post.creaateAt,
    //         tags: post.tags,
    //     }))
    // })
}


// Tìm kiếm
exports.searchPost = async (req, res) => {
    const { title } = req.query
    if (!title.trim())
        return res.status(401).json({ error: 'Truy vấn tìm kiếm bị thiếu' })

    // Tìm kiếm tiêu đề với chữ hoa và thường
    const post = await TourPost.find({ title: { $regex: title, $options: 'i' } })

    res.json({
        post: post.map((post) => ({
            id: post._id,
            title: post.title,
            content: post.content,
            place: post.place,
            price: post.price,
            // slug: post.slug,
            thumbnail: post.thumbnail?.url,
            guider: post.guider,
            startDate: post.startDate,
            endDate: post.endDate,
            range: post.range,
            email: post.email,
            phone: post.phone,
            schedule: post.schedule
        }))
    })
}

// Những bài viết liên quan
exports.relatedPosts = async (req, res) => {

    const { postId } = req.params
    if (!isValidObjectId(postId))
        return res.status(401).json({ error: 'Yêu cầu không hợp lệ' })

    const post = await Post.findById(postId)
    if (!post)
        return res.status(404).json({ error: 'Không tìm thấy bài đăng' })

    const relatedPosts = await Post.find({
        tags: { $in: [...post.tags] },
        _id: { $ne: post._id }
    })
        .sort({ createdAt: -1 })
        .limit(5)


    res.json({
        post: relatedPosts.map((post) => ({
            id: post._id,
            title: post.title,
            content: post.content,
            place: post.place,
            city: post.city,
            price: post.price,
            // slug: post.slug,
            thumbnail: post.thumbnail?.url,
            guider: post.guider,
            startDate: post.startDate,
            endDate: post.endDate,
            range: range,
            email: post.email,
            phone: post.phone,
            schedule: post.schedule,
            thumbnail: post.thumbnail?.url,
        }))
    })
}

exports.uploadImage = async (req, res) => {
    // Add image
    const { file } = req
    if (!file)
        return res.status(401).json({ error: "Hình ảnh không tìm thấy" })

    const { secure_url: url } = await cloudinary.uploader.upload(file.path)


    res.status(201).json({ image: url })
}