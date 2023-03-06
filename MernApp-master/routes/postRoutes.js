const router = require("express").Router();
const postCtrl = require("../controllers/postCtrl");
const auth = require("../middlewares/auth");
const CheckOwner = require("../middlewares/checkOwner");

router.get("/AllPost", auth, postCtrl.getAllPost);
router.get("/myPost", auth, postCtrl.getUserPost);
router.delete("/deletePost/:id", auth, postCtrl.deltePost);
router.put("/updatePost/:id", auth, CheckOwner, postCtrl.updatePost);

// comments
router.patch("/comment-post/:id", auth, postCtrl.commentPost);
router.patch("/edit-comment-post/:id", auth, postCtrl.editCommentPost);
router.patch("/delete-comment-post/:id", auth,  postCtrl.deleteCommentPost);

module.exports = router;
