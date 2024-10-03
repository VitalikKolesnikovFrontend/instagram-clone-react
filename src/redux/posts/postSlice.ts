import { createSlice } from "@reduxjs/toolkit";
import { postThunk } from "./postThunk";
import { Post } from "../../types";

interface PostsState {
  posts: Post[];
  status: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: false,
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postThunk.pending, (state) => {
        state.status = true;
      })
      .addCase(postThunk.fulfilled, (state, action) => {
        state.status = false;
        state.posts = action.payload;
      })
      .addCase(postThunk.rejected, (state, action) => {
        state.status = false;
        state.error = action.error.message || "error";
      });
  },
});
const postReducer = postsSlice.reducer;
export default postReducer;
