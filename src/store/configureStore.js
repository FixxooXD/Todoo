import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task"
// import userReducer from "./users"

const store = configureStore({
    reducer: {
        task: taskReducer,
        // user: userReducer
    }
})

export default store;