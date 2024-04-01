import { createListenerMiddleware, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:'login',
    initialState:{
        User:{}
    },
    reducers:{
        loggedUser:(state,action)=>{

        }
    }
})

export const {loggedUser}=loginSlice.actions;
export default loginSlice.reducer;