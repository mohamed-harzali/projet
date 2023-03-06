const router = require("express").Router();
const multer = require("multer");
const postCtrl = require("../controllers/postCtrl");
const auth = require("../middlewares/auth");

// file storage
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "public/assets");
  },
  filename: function (req, file, cd) {
    cd(null, file.originalname);
  },
});
// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
//   if (allowedFileTypes.includes(file.mimetype)) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
const upload = multer({ storage });

// routes whith files
router.post("/addNewPost", auth, upload.single("file"), postCtrl.addPost);

module.exports = router;
