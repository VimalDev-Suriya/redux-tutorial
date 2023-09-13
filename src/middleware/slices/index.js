import postReducer from './postSlice';
import authorReducer from './authorSlice';

export const rootReducer = {
    posts: postReducer,
    authors: authorReducer
}