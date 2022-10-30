const multer = require('multer')
const storage = multer.diskStorage({})

const fileFilter = (res, file, cb) => {
    if(!file.mimetype.includes('image')) {
        return cb('Hình ảnh không hợp lệ', false)
    }
    cb(null, true)
}

module.exports = multer({storage, fileFilter})