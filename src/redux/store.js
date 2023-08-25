import { configureStore } from "@reduxjs/toolkit";
import catReducer from './reducers/catReducers.js'
import usersReducer from './reducers/usersReducers.js'



export const store = configureStore({
    reducer: {
        categories:catReducer,
        users:usersReducer
      },
})