import { configureStore } from "@reduxjs/toolkit";
import catReducer from './reducers/catReducers.js'
import usersReducer from './reducers/usersReducers.js'
import mangaReducer from "./reducers/mangaReducer.js";
import chapterReducer from './reducers/chapterReducers.js'

export const store = configureStore({
    reducer: {
        categories:catReducer,
        users:usersReducer,
        mangas:mangaReducer,
        chapters:chapterReducer
      },
})