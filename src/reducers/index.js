import { combineReducers } from "redux";

import usersReducer from './usersReducer';
import authReducer from './authReducer';
import photoReducer from './photoReducer';
import commentReducer from './commentReducer';

const appReducer = combineReducers({
    usersReducer, authReducer, photoReducer, commentReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
