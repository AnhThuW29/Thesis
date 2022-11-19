exports.parseData = (req, res, next) => {
    const { tags, featured } = req.body
    // console.log(req.body)
    // if (tags) req.body.tags
    // if (featured) req.body.featured = JSON.parse(featured)
    next()
}