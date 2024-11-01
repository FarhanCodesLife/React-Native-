import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducer/userslice";

export const store = configureStore({
    reducer:reducer
})