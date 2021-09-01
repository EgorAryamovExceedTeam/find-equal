import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  size: 3,
};

const getName = createAction("GET_NAME");
const getSize = createAction("GET_SIZE");

export default userReducer =
  ((state = initialState),
  {
    [getName]: (state) => {
      console.log("Name", state);
      state.userName;
    },
    [getSize]: (state) => {
      console.log("size", state);
      state.size;
    },
  });
