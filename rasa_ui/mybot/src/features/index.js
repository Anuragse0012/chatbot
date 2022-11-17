import { combineReducers } from 'redux';

//Import reducers
import chatReducer from './chatreducer';
import postReducer from './postsSlice';

//Export combined reducers
export default combineReducers({ chatReducer, postReducer });

