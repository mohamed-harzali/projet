import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost, getPost } from "../../redux/actions/postActions";
import "./post.css";
import CardComments from "./CardComments";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(post._id)).then(() => {
      dispatch(getPost());
    });
  };

  return (
    <div className="card" style={{ width: "700px" }}>
      <h6 className="ownr"> {post.owner.name} </h6>
      {post.image && (
        <img
          src={post.image}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.description}</p>
        <div className="comment-icon">
          <img
            className="imgcomment"
            onClick={() => setShowComments(!showComments)}
            src="./img/icons/message1.svg"
            alt="comment"
          />
          <span>{post.comments.length}</span>
        </div>
        <div className="fasa5">
          <button className="btn btn-light" onClick={handleDelete}>
            delete
          </button>
        </div>
      </div>
      {showComments && <CardComments post={post} />}
    </div>
  );
};

export default Post;
