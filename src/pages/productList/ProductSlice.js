import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  message: "",
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchAllProductSuccess: (state, { payload }) => {
      state.productList = payload.result;
    },
  },
});

const { reducer, actions } = productSlice;

export const { fetchAllProductSuccess } = actions;

export default reducer;
