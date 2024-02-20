import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name : "images",
    initialState : {
        images : null,
        next : 0,
    },
    reducers : {
        addImages:(state,action)=>{
            state.images=action.payload;
        },
        incrementNext:(state)=>{
            state.next=state.next+1;
        }
    }
});

export const {addImages,incrementNext} = imageSlice.actions;

export default imageSlice.reducer;