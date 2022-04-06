import { configureStore } from "@reduxjs/toolkit";
import queryReducer from './reducer/querySlice';

export default configureStore({
    reducer:{
        query : queryReducer,
    },
})