import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/usersActions.js"; // Asegúrate de que el nombre coincida exactamente
const {create_users}=usersActions
const initialState = {
  users: []
};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(create_users.fulfilled, (state, action) => { // Usa read_categories.fulfilled
    return {
      ...state,
      users: action.payload
    };
  });
});

export default usersReducer ;