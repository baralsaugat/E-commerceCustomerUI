import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
  signUpList: [],
};

const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    addAllUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.signUpList = payload.result;
    },
  },
});

const { reducer, actions } = signUpSlice;
export const { requestPending, addAllUserSuccess } = actions;

export default reducer;
