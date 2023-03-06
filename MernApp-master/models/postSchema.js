const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: String,
    description: String,

    owner: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },

    image: {
      type: String,
    },
    comments: {
      type: [
        {
          commenterId: String,
          commenterPseudo: String,
          text: String,
          timestamp: Number,
        },
      ],
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);
module.exports = Post;
