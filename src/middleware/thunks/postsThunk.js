import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPosts } from "../../services/postService";

// @payload param will accept the data which we passed inthe dispatch
export const fetchPost = createAsyncThunk('post/fetchPost', async(payload)=>{
    try {
        const response = await getPosts();
        return response.data;
    } catch (error) {
        return {
            msg: error.message,
            status: error.status
        }
    }
})