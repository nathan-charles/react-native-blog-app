import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import { postReducer } from './post/reducer';

const rootReducer = combineReducers({
  post: postReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const getMiddleware = () => {
  const middlewares = [reduxThunk];

  if (__DEV__) {
    // Add development middleware here
    // middlewares.push(logMiddleware);
  }

  return applyMiddleware(...middlewares);
};

const store = createStore(rootReducer, composeWithDevTools(getMiddleware()));
export default store;
