import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loginResponse: "",
  isAuth: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isPending: (state) => {
      state.isLoading = true;
    },

    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
      state.isAuth = true;
    },

    requestFail: (state, { payload }) => {
      state.isLoading = false;
      state.loginResponse = payload || {};
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginSuccess, requestFail, isPending } = actions;

export default reducer;
