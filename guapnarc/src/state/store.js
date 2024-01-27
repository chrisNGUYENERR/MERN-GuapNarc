import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./reducers/combineReducers";
import { registerMiddleware } from "../middlewares/registerMiddleware";
import { loginMiddleware } from "../middlewares/loginMiddleware";


const store = configureStore({
    reducer: combineReducers,
    middleware: [
        registerMiddleware,
        loginMiddleware,
    ]
});

export default store;