import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../../components/Post/Post";
import { getPost } from "../../redux/actions/postActions";
import "./allPost.css";

const AllPost = () => {
  const dispatch = useDispatch();
  const Allposts = useSelector((state) => state.postReducers.postList);
  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      dispatch(getPost(count));
      setLoadPost(false);
      setCount(count + 5);
    }

    window.addEventListener("scroll", loadMore);
    return () => window.removeEventListener("scroll", loadMore);
  }, [loadPost, dispatch, count]);

  return (
    <div className="lista">
      {Allposts &&
        Allposts.map((post, i) => <Post key={i} post={post} />).reverse()}
    </div>
  );
};

export default AllPost;
