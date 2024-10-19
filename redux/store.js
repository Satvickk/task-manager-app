"use client"

import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./features/taskSlice";

export const Store = configureStore({
    reducer:{
        Tasks : TaskSlice
    }
})