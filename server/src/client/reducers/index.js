import {combineReducers} from 'redux';
import usersReducer from './users-reducer.js';

export default combineReducers({
    users: usersReducer,
});
