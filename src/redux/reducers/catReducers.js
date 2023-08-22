import { createReducer } from "@reduxjs/toolkit";
import actionsCat from "../actions/actionsCat.js"; // Asegúrate de que el nombre coincida exactamente
const {read_categories}=actionsCat
const initialState = {
  categories: []
};

const catReducer = createReducer(initialState, (builder) => {
  builder.addCase(read_categories.fulfilled, (state, action) => { // Usa read_categories.fulfilled
    return {
      ...state,
      categories: action.payload
    };
  });
});

export default catReducer;