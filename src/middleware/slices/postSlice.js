import { createSlice } from "@reduxjs/toolkit"; // immer
import { fetchPost } from "../thunks/postsThunk";

const INITIAL_STATE = {
    postList:null,
    loading:false,
    error:null
}

const postSlice = createSlice({
    name:'post',
    initialState:INITIAL_STATE,
    reducers:{
        addPost:(state, actions)=>{
            state.postList.push(actions.payload)
        }
    },
    extraReducers(builder){
        builder.addCase(fetchPost.pending, (state)=>{
            state.loading = true;
        }).addCase(fetchPost.fulfilled, (state, actions) => {
            state.loading = false;
            state.postList = actions.payload
        }).addCase(fetchPost.rejected, (state, actions)=>{
            state.loading = false;
            state.error = actions.payload
        })
    }
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer;
