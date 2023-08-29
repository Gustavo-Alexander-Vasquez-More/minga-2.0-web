import { createReducer } from "@reduxjs/toolkit";
import mangaActions from "../actions/mangaAction.js";
const {create_manga}=mangaActions
const initialState = {
    mangas: []
  };

const mangaReducer=createReducer(initialState, (builder)=>{
    builder.addCase(create_manga.fulfilled, (state, action)=>{
        return {
            ...state,
            mangas: action.payload
          };
    })
}) 
export default mangaReducer