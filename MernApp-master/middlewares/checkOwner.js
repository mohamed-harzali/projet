const Post = require("../models/postSchema");

const checkPostOwner = async (req, res, next) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, owner: req.user.id });
    if (!post)
      return res.status(401).json({ errors: [{ msg: " Not authorized !" }] });
    next();
  } catch (err) {
    res.status().json({ err: err });
  }
};

module.exports = checkPostOwner;
