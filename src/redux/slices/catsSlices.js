import {createSlice} from "@reduxjs/toolkit";
import {catsThunkExtraReducer} from "../thunks/catsThunk";


const initialState = {

        name: "Alex",
        url: "https://media.istockphoto.com/id/1661873167/photo/cute-young-cat-playing-in-a-garden.jpg?s=2048x2048&w=is&k=20&c=CO0nIN7u1ZPIcZR2oHDpjxfD9myfO4sKxqKKxhrpufQ=",
        isLoading: false


}
const catSlice = createSlice({
    name: "catsSlice",
    initialState,
    reducer: {
        setCats:(state, {payload}) =>{
            state.url = payload
        }
    },
    extraReducers: builder => {
        catsThunkExtraReducer(builder);
    }
})
export const {setCats} = catSlice.actions;

// export  const catsSelector = state => state.catsSlice;
export  const catsSelector = state => state.catsSlice.name;
export const isLoadingCats = state => state.catsSlice.isLoading;
// export const catsSelectorUrl = state => state.catsSlice.url;
export default catSlice.reducer;