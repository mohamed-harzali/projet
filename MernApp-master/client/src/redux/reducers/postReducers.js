import { LOGOUT } from "../actions/authType";
import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "../actions/PostTypes";

const initState = {
  postList: [],
  errors: null,
  isLoading: false,
};

const postReducers = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        errors: null,
        isLoading: true,
      };

    case GET_POST_SUCCESS:
      return {
        ...state,
        postList: payload,
        errors: false,
        isLoading: false,
      };

    case GET_POST_FAILED:
      return {
        ...state,
        errors: payload,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        postList: [],
      };

    case EDIT_COMMENT:
      return state.postList.map((post) => {
        if (post._id === payload.postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment._id === payload.commentId) {
                return {
                  ...comment,
                  text: payload.text,
                };
              } else {
                return comment;
              }
            }),
          };
        } else return post;
      });

    case DELETE_COMMENT:
      return state.postList.map((post) => {
        if (post._id === payload.postId) {
          return {
            ...post,
            comments: post.comments.filter(
              (comment) => comment._id !== payload.commentId
            ),
          };
        } else return post;
      });
    default:
      return state;
  }
};

export default postReducers;
