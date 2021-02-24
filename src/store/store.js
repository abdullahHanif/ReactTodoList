import { todoReducer } from "./todoAppSlice";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        todoReducer: todoReducer,
    }
    ,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
})