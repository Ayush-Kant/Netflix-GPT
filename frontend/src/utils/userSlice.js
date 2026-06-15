import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState: null,
    reducers: {
        addUser: (state,action) =>{
            return action.payload //this will add payload in state
        },
        removeUser: (state) =>{
            return null //this will empty the state
        }
    }
});

export const {addUser,removeUser} = userSlice.actions

export default userSlice.reducer;