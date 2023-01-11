const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../images'));
    },
    filename: function (req, file, cb) {
      cb(null,new Date().toISOString().replace(/:/g,"-")+ file.originalname)
    }
  });
  module.exports = multer({
    storage: storage,
    limits: 1024*1024,
    fileFilter: function (req, file, cb) {
      var ext = path.extname(file.originalname);
      if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
        return cb(new Error('Only images are allowed'))
      }
       cb(null, true)
    }
  })
  
