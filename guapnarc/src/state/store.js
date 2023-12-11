import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./reducers/combineReducers";


const store = configureStore({
    reducer: combineReducers
})

export default store;