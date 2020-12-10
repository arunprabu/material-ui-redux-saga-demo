import { action } from 'typesafe-actions';
import { Post, PostsActionTypes } from './types';
export const fetchRequest = () => action(PostsActionTypes.FETCH_REQUEST)

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const fetchSuccess = (data: Post[]) => action(PostsActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(PostsActionTypes.FETCH_ERROR, message)