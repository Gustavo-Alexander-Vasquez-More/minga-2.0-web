import { configureStore } from "@reduxjs/toolkit";
import catReducer from './reducers/catReducers.js'



export const store = configureStore({
    reducer: {
        categories:catReducer
      },
})