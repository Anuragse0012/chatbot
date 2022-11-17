import { combineReducers } from 'redux';

//Import reducers
import chatReducer from './chatreducer';

//Export combined reducers
export default combineReducers({ chatReducer });

