import { createSlice } from "@reduxjs/toolkit";

const initialState={
    favoriteList:[]
}
const favoriteSlice=createSlice({
    name:'favorite',
    initialState,
    reducers:{
        removeAllFavorite:(state)=>{
            state.favoriteList=[]
        },
        removeFavorite:(state,action)=>{
            const {id}=action.payload
            state.favoriteList=state.favoriteList.filter((item)=>
            item?.id!=id
            )
        },
        addFavorite: (state, action) => {
          
            if (!state.favoriteList.some(item => item?.id === action?.payload?.id)) {
                state.favoriteList.push(action.payload);
            }
        },
        
    }

})
export default favoriteSlice.reducer
export const {removeAllFavorite,removeFavorite,addFavorite}=favoriteSlice.actions