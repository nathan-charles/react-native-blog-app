export const FETCH_USER_POSTS_PENDING = 'FETCH_USER_POSTS_PENDING';
export const FETCH_USER_POSTS_SUCCESS = 'FETCH_USER_POSTS_SUCCESS';
export const FETCH_USER_POSTS_ERROR = 'FETCH_USER_POSTS_ERROR';
export const FETCH_OTHER_POSTS_PENDING = 'FETCH_OTHER_POSTS_PENDING';
export const FETCH_OTHER_POSTS_SUCCESS = 'FETCH_OTHER_POSTS_SUCCESS';
export const FETCH_OTHER_POSTS_ERROR = 'FETCH_OTHER_POSTS_ERROR';

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export type PostState = {
  userPostsLoading: boolean;
  userPosts: Array<Post>;
  userPostsError?: Error;
  otherPostsLoading: boolean;
  otherPosts: Array<Post>;
  otherPostsError?: Error;
};

type FetchUserPostsPendingAction = {
  type: typeof FETCH_USER_POSTS_PENDING;
};

type FetchUserPostsSuccessAction = {
  type: typeof FETCH_USER_POSTS_SUCCESS;
  payload: [Post];
};

type FetchUserPostsErrorAction = {
  type: typeof FETCH_USER_POSTS_ERROR;
  payload: Error;
};

type FetchOtherPostsPendingAction = {
  type: typeof FETCH_OTHER_POSTS_PENDING;
};

type FetchOtherPostsSuccessAction = {
  type: typeof FETCH_OTHER_POSTS_SUCCESS;
  payload: [Post];
};

type FetchOtherPostsErrorAction = {
  type: typeof FETCH_OTHER_POSTS_ERROR;
  payload: Error;
};

export type PostActionTypes =
  | FetchUserPostsPendingAction
  | FetchUserPostsSuccessAction
  | FetchUserPostsErrorAction
  | FetchOtherPostsPendingAction
  | FetchOtherPostsSuccessAction
  | FetchOtherPostsErrorAction;
