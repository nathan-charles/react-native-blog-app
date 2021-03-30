import {
  PostState,
  PostActionTypes,
  FETCH_USER_POSTS_PENDING,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_ERROR,
  FETCH_OTHER_POSTS_PENDING,
  FETCH_OTHER_POSTS_SUCCESS,
  FETCH_OTHER_POSTS_ERROR,
} from './types';

const initialState: PostState = {
  userPostsLoading: false,
  userPosts: [],
  userPostsError: undefined,
  otherPostsLoading: false,
  otherPosts: [],
  otherPostsError: undefined,
};

export function postReducer(
  state = initialState,
  action: PostActionTypes,
): PostState {
  switch (action.type) {
    case FETCH_USER_POSTS_PENDING: {
      return {
        ...state,
        userPostsError: undefined,
        userPostsLoading: true,
      };
    }
    case FETCH_USER_POSTS_SUCCESS: {
      return {
        ...state,
        userPosts: action.payload,
        userPostsLoading: false,
      };
    }
    case FETCH_USER_POSTS_ERROR: {
      return {
        ...state,
        userPosts: [],
        userPostsError: action.payload,
        userPostsLoading: false,
      };
    }
    case FETCH_OTHER_POSTS_PENDING: {
      return {
        ...state,
        otherPostsError: undefined,
        otherPostsLoading: true,
      };
    }
    case FETCH_OTHER_POSTS_SUCCESS: {
      return {
        ...state,
        otherPosts: action.payload,
        otherPostsLoading: false,
      };
    }
    case FETCH_OTHER_POSTS_ERROR: {
      return {
        ...state,
        otherPosts: [],
        otherPostsError: action.payload,
        otherPostsLoading: false,
      };
    }
    default:
      return state;
  }
}
