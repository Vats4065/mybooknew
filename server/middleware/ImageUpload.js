const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req);
        cb(null, '/uploads')
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        console.log(path);
        cb(null, Date.now() + ext)
    }
})

const uploadFile = multer({
    storage: storage
})


module.exports = uploadFile