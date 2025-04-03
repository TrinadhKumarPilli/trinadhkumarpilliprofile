import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./Reducers/loginReducer";

const rootReducer = combineReducers({
    loginReducer
});

export default rootReducer