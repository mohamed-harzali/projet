import React, { useEffect, useState } from "react";
import "./editdlete.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteComment,
  editComment,
  getPost,
} from "../../redux/actions/postActions";

const EditDeleteComment = ({ comment, postId }) => {
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState("");
  const userData = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    if (text) {
      dispatch(editComment(postId, comment._id, text)).then(() => {
        dispatch(getPost());
        setText("");
        setEdit(false);
      });
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment._id)).then(() => {
      dispatch(getPost());
    });
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (userData._id === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [userData._id, comment.commenterId]);

  return (
    <div className="edit-comment">
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img className="asba" src="./img/icons/edit.svg" alt="edit-comment" />
        </span>
      )}
      {isAuthor && edit && (
        <form action="" onSubmit={handleEdit} className="edit-comment-form">
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Editer
          </label>
          <br />
          <input
            className="comm "
            type="text"
            name="text"
            onChange={(e) => setText(e.target.value)}
            defaultValue={comment.text}
          />
          <br />
          <div className="btnDel">
            <p className="no9ta">.</p>
            <span
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce commentaire ?")) {
                  handleDelete();
                }
              }}
            >
              <img
                className="poupel"
                src="./img/icons/trash.svg"
                alt="delete"
              />
            </span>
            <div className="modif">
              <input
                className="btn btn-light"
                type="submit"
                value="Valider modification"
              />
              <p className="no9ta">.</p>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDeleteComment;
