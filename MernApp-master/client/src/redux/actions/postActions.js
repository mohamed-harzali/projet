import axios from "axios";
import {
  ADD_POST_FAILED,
  ADD_POST_SUCCESS,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  DELETE_POST_REQUEST,
  DELETE_POST_FAILED,
  DELETE_POST_SUCCESS,
  ADD_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "./PostTypes";
import { setToken } from "../../helpers/token";
import { prefixe } from "../../helpers/const";

export const addPost = (newPost) => async (dispatch) => {
  dispatch({
    type: ADD_POST_FAILED,
  });

  try {
    setToken();
    const { data } = await axios.post(
      `${prefixe}/api/File/addNewPost`,
      newPost
    );
    dispatch({
      type: ADD_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: ADD_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

export const getPost = () => async (dispatch) => {
  dispatch({
    type: GET_POST_REQUEST,
  });
  try {
    setToken();
    const { data } = await axios.get(`${prefixe}/api/Post/AllPost`);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_POST_REQUEST,
  });

  try {
    setToken();
    await axios.delete(`${prefixe}/api/Post/deletePost/${id}`);
    dispatch({
      type: DELETE_POST_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: DELETE_POST_FAILED,
      payload: err.response.data.msg,
    });
  }
};

export const addComment = (postId, commenterId, text, commenterPseudo) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "patch",
        url: `${prefixe}/api/post/comment-post/${postId}`,
        data: { commenterId, text, commenterPseudo },
      });
      dispatch({ type: ADD_COMMENT, payload: { postId } });
    } catch (err) {
      return console.error(err);
    }
  };
};

export const editComment = (postId, commentId, text) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "patch",
        url: `${prefixe}/api/post/edit-comment-post/${postId}`,
        data: { commentId, text },
      });
      dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
    } catch (err) {
      return console.error(err);
    }
  };
};

export const deleteComment = (postId, commentId) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "patch",
        url: `${prefixe}/api/post/delete-comment-post/${postId}`,
        data: { commentId },
      });
      dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
    } catch (err) {
      return console.error(err);
    }
  };
};
