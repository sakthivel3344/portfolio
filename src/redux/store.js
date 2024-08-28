import { configureStore } from '@reduxjs/toolkit';
import { sideBarReducer } from './slices/sideBar';

const store = configureStore({
    reducer: {
        sidebar: sideBarReducer,
    }
})

export default store;