import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./AuthReducers";

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer