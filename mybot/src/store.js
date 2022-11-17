import { configureStore } from "@reduxjs/toolkit";
import combineReducers from './features/index';

export const store = configureStore({
    reducer: {
        chat: combineReducers,
    },
});

