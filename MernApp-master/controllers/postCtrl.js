const Post = require("../models/postSchema");
const User = require("../models/userSchema");

const postCtrl = {
  addPost: async (req, res) => {
    try {
      const { title, description } = req.body;
      const userId = req.user.id;
      const { filename } = req.file || {};
      const image =
        req.file !== null && filename !== undefined
          ? `${process.env.REACT_APP_API_URL}assets/${filename}`
          : "";

      const newPost = new Post({
        title,
        description,
        image: image,
        owner: userId,
      });

      const post = await newPost.save();
      return res.status(201).json(post);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getAllPost: async (req, res) => {
    try {
      const allPosts = await Post.find().populate({
        path: "owner",
        select: "name",
      });
      res.json(allPosts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUserPost: async (req, res) => {
    try {
      const getMyPosts = await Post.find({ owner: req.user.id }).populate({
        path: "owner",
        select: "name",
      });
      res.json(getMyPosts);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deltePost: async (req, res) => {
    try {
      const userId = req.user.id;
      const postId = req.params.id;
      const user = await User.findById(userId);
      const post = await Post.findById(postId);

      if (!userId || !postId) {
        return res.status(400).json({ msg: "Invalid user or post ID" });
      }

      if (!user || !post) {
        return res.status(404).json({ msg: "User or post not found." });
      }

      if (user.Role === 1 || post.owner.toString() === userId) {
        await Post.findByIdAndDelete(postId);
        res.json({ message: "Successful delete." });
      } else {
        res.status(401).json({ errors: [{ msg: "Not authorized." }] });
      }
    } catch (err) {
      console.error("error:", err);
      return res.status(500).json({ msg: err.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        ...req.body,
      });
      res.json(updatedPost);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  commentPost: (req, res) => {
    try {
      return Post.findByIdAndUpdate(
        req.params.id,
        {
          $push: {
            comments: {
              commenterId: req.body.commenterId,
              commenterPseudo: req.body.commenterPseudo,
              text: req.body.text,
              timestamp: new Date().getTime(),
            },
          },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).json({ message: err }));
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  editCommentPost: (req, res) => {
    try {
      return Post.findById(req.params.id, (err, docs) => {
        const theComment = docs.comments.find((comment) =>
          comment._id.equals(req.body.commentId)
        );

        if (!theComment) return res.status(404).send("Comment not found");
        theComment.text = req.body.text;

        return docs.save((err) => {
          if (!err) return res.status(200).send(docs);
          return res.status(500).send(err);
        });
      });
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  deleteCommentPost: (req, res) => {
    try {
      return Post.findByIdAndUpdate(
        req.params.id,
        {
          $pull: {
            comments: {
              _id: req.body.commentId,
            },
          },
        },
        { new: true }
      )
        .then((data) => res.send(data))
        .catch((err) => res.status(500).json({ message: err }));
    } catch (err) {
      return res.status(400).send(err);
    }
  },
};

module.exports = postCtrl;
