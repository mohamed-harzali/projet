import React, { useState } from "react";
import { addPost, getPost } from "../../redux/actions/postActions";
import "./addPost.css";
import { useDispatch } from "react-redux";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [postPicture, setPostPicture] = useState(null);

  const handlePost = () => {
    if (description || postPicture || title) {
      const data = new FormData();
      data.append("title", title);
      data.append("description", description);
      if (file) data.append("file", file);

      dispatch(addPost(data)).then(() => {
        dispatch(getPost());
        cancelPost();
      });
    } else {
      alert("Veuillez entrer un message");
    }
  };

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  const cancelPost = () => {
    setTitle("");
    setDescription("");
    setPostPicture("");
    setFile("");
  };

  return (
    <div className="AddPost">
      <img
        name="newImage"
        width="50px"
        src="https://static.vecteezy.com/system/resources/previews/005/218/431/non_2x/q-initial-letter-monogram-esport-and-gaming-logo-template-free-vector.jpg"
        alt="myImg"
      />
      <input
        type="file"
        name="file"
        id="file-upload"
        accept=".jpg, .jpeg, .png, .gif"
        onChange={(e) => handlePicture(e)}
      />
      <input
        name="title"
        type="text"
        placeholder="Title"
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        name="description"
        type="text"
        placeholder="Description"
        autoFocus
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <button className="btn" onClick={handlePost}>
        {" "}
        add new post{" "}
      </button>
    </div>
  );
};

export default AddPost;
