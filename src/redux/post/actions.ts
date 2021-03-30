import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { AppState } from '../index';
import {
  Post,
  FETCH_USER_POSTS_PENDING,
  FETCH_USER_POSTS_SUCCESS,
  FETCH_USER_POSTS_ERROR,
  FETCH_OTHER_POSTS_PENDING,
  FETCH_OTHER_POSTS_SUCCESS,
  FETCH_OTHER_POSTS_ERROR,
} from './types';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com';

export const fetchUserPosts = (
  userId: number,
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    dispatch({
      type: FETCH_USER_POSTS_PENDING,
    });

    const response = await fetch(`${API_ENDPOINT}/posts?userId=${userId}`);
    const posts: [Post] = await response.json();

    dispatch({
      type: FETCH_USER_POSTS_SUCCESS,
      payload: posts,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_POSTS_ERROR,
      payload: error,
    });
  }
};

export const fetchOtherPosts = (
  userId: number,
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  try {
    dispatch({
      type: FETCH_OTHER_POSTS_PENDING,
    });

    const response = await fetch(`${API_ENDPOINT}/posts`);
    const posts: [Post] = await response.json();

    dispatch({
      type: FETCH_OTHER_POSTS_SUCCESS,
      payload: posts.filter(p => p.userId !== userId),
    });
  } catch (error) {
    dispatch({
      type: FETCH_OTHER_POSTS_ERROR,
      payload: error,
    });
  }
};
