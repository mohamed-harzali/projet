import React, { useState } from "react";
import "./cardcomment.css";
import { useDispatch, useSelector } from "react-redux";
import { addComment, getPost } from "../../redux/actions/postActions";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ post }) => {
  const [text, setText] = useState("");
  const userData = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const handleComment = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.name))
        .then(() => dispatch(getPost()))
        .then(() => setText(""));
    }
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={comment._id}
          >
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h4>{comment.commenterPseudo}</h4>
                </div>
              </div>
              <p className="ta3li9">{comment.text}</p>
              <EditDeleteComment comment={comment} postId={post._id} />
            </div>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            className="comm"
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="Laisser un commentaire"
          />
          <br />
          <div className="envoyer">
            <input className="btn btn-light" type="submit" value="Envoyer" />
            <p className="no9ta">.</p>
          </div>
        </form>
      )}
    </div>
  );
};

export default CardComments;
