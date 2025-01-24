import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:null,
    token:null
}
const AuthSlice=createSlice({
    name:'authSlice',
    initialState:initialState,
    reducers:{
     getUser:(state,action)=>{
        state.user=action.payload.user
        state.token=action.payload.token
     },
     removeUser:(state)=>{
        state.token=null;
        state.user=null;
     }
}})
export default AuthSlice.reducer
export const {getUser,removeUser} =AuthSlice.actions