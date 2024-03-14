
import {createSlice} from "@reduxjs/toolkit";

const  initialState  = {
    username : "",
    role : ""
}
const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers:{
        setUserName: (state, {payload}) =>{
            state.username  = payload;
        }
    }
})
export const {setUserName} = userProfileSlice.actions;
export default userProfileSlice.reducer;