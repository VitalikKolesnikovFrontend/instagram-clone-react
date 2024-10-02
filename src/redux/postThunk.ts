import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./api";

export const postThunk = createAsyncThunk("posts/postThunk", async () => {
  const response = await api.get("/posts");
  console.log(response.data);
  return response.data;
});
