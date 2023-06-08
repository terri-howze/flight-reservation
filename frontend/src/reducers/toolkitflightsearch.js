import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'flightSearch',
    initialState:{
        departure:'',
        destination:'',
        departureDate:'',
        returnDate:''
    },
    reducers:{
        setDestination: (state, {payload}) => state.username = payload,
        setDeparture: (state, {payload}) => state.password = payload,
        setleaveDate: (state, {payload}) => state.username = payload,
        setReturn: (state, {payload}) => state.password = payload
    }
})

export const {setDestination, setDeparture, setleaveDate, setReturn} = userSlice.actions;

export default searchSlice.reducer;