import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './component/feature/theme/themeSlice.js'

export const store = configureStore({
    reducer: {
        theme : themeReducer ,
    },
});
