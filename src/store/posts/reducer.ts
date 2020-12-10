import { Reducer } from 'redux';
import { PostsActionTypes, PostsState } from './types';

// Type-safe initialState!
const initialState: PostsState = {
  postList: [],
  errors: undefined,
  loading: false,
  status: undefined
}

// everything will remain type-safe.
const reducer: Reducer<PostsState> = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.CREATE_REQUEST || 
         PostsActionTypes.FETCH_REQUEST || 
         PostsActionTypes.FETCH_REQUEST_BY_ID || 
         PostsActionTypes.UPDATE_REQUEST_BY_ID: 
      return { ...state, loading: true }

    case PostsActionTypes.CREATE_SUCCESS: 
        return state;

    case PostsActionTypes.FETCH_SUCCESS: 
      const newState = {
        postList: action.payload,
        error: false,
        loading: false,
        status: action.status
      }
      return newState;

    case PostsActionTypes.FETCH_ERROR: 
      return state;

    case PostsActionTypes.FETCH_SUCCESS_BY_ID: 
      return state;

    case PostsActionTypes.UPDATE_SUCCESS_BY_ID: 
      return state;
    
    default: 
      return state
  }
}

// Instead of using default export, we use named exports. 
// That way we can group these exports
// inside the `index.ts` folder.
export { reducer as postsReducer }
