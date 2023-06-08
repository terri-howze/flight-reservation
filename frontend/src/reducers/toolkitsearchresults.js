import { createSlice } from "@reduxjs/toolkit";

const resultsSlice = createSlice({
    name: 'searchResults',
    initialState:{
        flightResults:''
    },
    reducers:{
        setflightResults: (state, {payload}) => state.flightResults= payload
    }
})

export const {setflightResults} = userSlice.actions;

export default resultsSlice.reducer;