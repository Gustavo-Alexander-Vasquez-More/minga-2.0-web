import { createReducer } from "@reduxjs/toolkit";
import usersActions from "../actions/usersActions.js";

const { create_users, LogIn_users } = usersActions;

const initialState = {
  users: []
};

const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(create_users.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload
      };
    })
    .addCase(LogIn_users.fulfilled, (state, action) => {
      return {
        ...state,
        users: action.payload
      };
    });
});

export default usersReducer;
