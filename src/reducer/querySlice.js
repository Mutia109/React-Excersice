import { createSlice } from "@reduxjs/toolkit";

export const querySlice = createSlice({
    name: 'query',
    initialState: {
        value : '',
    },
    reducers :{
        setQuery : (state, action) => {
            state.value = action.payload;
        }
    }

});
export const {setQuery} = querySlice.actions;

export default querySlice.reducer;
