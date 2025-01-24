import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  list: [],
};

const cartSlice = createSlice({
  
  name: "cart",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.list = [];
    },
    removeItem: (state, action) => {
      state.list = state.list.filter((e) => {
        if (e.id === action.payload) {
          e.quantity = e.quantity - 1;
          if (e.quantity == 0) {
            return false;
          }
          return e
        }
        return e
      });
    },
    addItem: (state, action) => {
        let add=false
        state.list=state.list.map((e)=>{
            if(e.id==action.payload.id){
                e.quantity=e.quantity+1
                add =true
                return e
            }
            return e
          
        })
        if(!add){
            state.list.push({...action.payload,quantity:1})
        }
    }
   
}});
export default cartSlice.reducer
export const{removeAll,removeItem,addItem}=cartSlice.actions
