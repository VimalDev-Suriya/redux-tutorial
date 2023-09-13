import { createSlice } from "@reduxjs/toolkit"; // immer

const INITIAL_STATE = {
    authorList: [{
        name: 'test author',
        id: 1,
    }],
    loading:false,
    error:null
}

const authorSlice = createSlice({
    name:'author',
    initialState:INITIAL_STATE,
    reducers:{}
})

export default authorSlice.reducer;
