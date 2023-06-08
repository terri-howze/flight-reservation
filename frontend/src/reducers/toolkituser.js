import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        username:'',
        password:''
    },
    reducers:{
        setUsername: (state, {payload}) => state.username = payload,
        setPassword: (state, {payload}) => state.password = payload
    }
})

export const {setUsername, setPassword} = userSlice.actions;

export default userSlice.reducer;