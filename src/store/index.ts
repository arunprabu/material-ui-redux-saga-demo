import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history';
import { PostsState } from './posts/types';
import { postsReducer } from './posts/reducer';

// now, like our posts feature is having a saga, many features will also have on their own. 
// so, we have to make rootSaga out of all sagas .
// have these imports in the same file 
import { all, fork } from 'redux-saga/effects';
import postsSaga from './posts/sagas';

// The top-level state object
export interface ApplicationState {
  posts: PostsState  
  router: RouterState
} 

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const createRootReducer = (history: History) =>{
  return combineReducers({
    posts: postsReducer, 
    router: connectRouter(history)
  })

}
  
// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* rootSaga() {
  yield all(
    [fork(postsSaga),
    // another feature's saga will come here
  ])
}