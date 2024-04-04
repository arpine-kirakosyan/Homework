import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import userProfile from "../redux/slices/userProfileSlice";
import catsSlice from "./slices/catsSlices";
import todoSlice from "./slices/todoSlice";
import { todosApi } from '../api/RTK/todos'

const rootReducer = combineReducers({
  userProfile,
  catsSlice,
  todoSlice,
  [todosApi.reducerPath]: todosApi.reducer
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),
});
// console.log(store)

