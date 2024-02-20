import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./imageSlice";

const appStore = configureStore({
    reducer:{
        images : useReducer
    }
});

export default appStore;