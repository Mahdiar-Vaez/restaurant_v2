import { configureStore } from "@reduxjs/toolkit";
import authSlide from "./authSlide";
import cartSlice from "./CartSlice";
import favoriteSlice from "./FavoriteSlice";
const store=configureStore({
    reducer:{
        auth:authSlide,
        cart:cartSlice,
        favorite:favoriteSlice
    },


})
export default store