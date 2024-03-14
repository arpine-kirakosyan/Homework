import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import userProfile from "../redux/slices/userProfileSlice";
import catsSlice from "./slices/catsSlices"

const rootReducer = combineReducers({
    userProfile,
    catsSlice
})


 export const store = configureStore({
      reducer: rootReducer,

  })
// console.log(store)

