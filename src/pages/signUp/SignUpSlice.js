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
      state.status = payload.status;
      state.message = payload.message;
    },
  },
});

const { reducer, actions } = signUpSlice;
export const { requestPending, addAllUserSuccess } = actions;

export default reducer;
