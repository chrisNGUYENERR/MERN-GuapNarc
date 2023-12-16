import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./reducers/combineReducers";
import { registerMiddleware } from "../middlewares/registerMiddleware";


const store = configureStore({
    reducer: combineReducers,
    middleware: [
        registerMiddleware
    ]
});

export default store;