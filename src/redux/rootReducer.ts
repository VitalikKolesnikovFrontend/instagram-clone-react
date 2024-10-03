import { combineReducers } from "@reduxjs/toolkit";
import postReducer from "./posts/postSlice";

const rootReducer = combineReducers({
  posts: postReducer,
});

export default rootReducer;
