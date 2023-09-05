import { createReducer } from "@reduxjs/toolkit";
import chapterActions from '../actions/chapterActions.js'
const {read_pag_chap}=chapterActions

const initialState = {
    chapters: [],
    prevPage:null,
    nextPage:null,
    currentPage:1
  };

  const chapterReducer=createReducer(initialState, (builder)=>{
    builder
    .addCase(read_pag_chap.fulfilled, (state, action)=>{
        return {
            ...state,
            chapters: action.payload.chapters,
            prevPage:action.payload.prevPage,
            nextPage:action.payload.nextPage,
            currentPage:action.payload.currentPage
          };
    })
  })

  export default chapterReducer