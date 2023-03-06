import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddPost from "../../components/AddPost/AddPost";
import { getProfile } from "../../redux/actions/authActions";
import { getPost } from "../../redux/actions/postActions";

const Profile = () => {
  const dispatch = useDispatch();
  const profUser = useSelector((state) => state.authReducer.user);
  const loader = useSelector((state) => state.authReducer.isLoading);

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/002/884/043/original/abstract-red-and-black-futuristic-gaming-background-in-livestream-free-vector.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <h1 className="addposthere">. </h1>
        <h1 className="mop">ADD Post Here : </h1>
        <AddPost></AddPost>
        <h1 className="mopo">. </h1>
        <h1 className="mopo">. </h1>
      </div>
    </>
  );
};

export default Profile;
