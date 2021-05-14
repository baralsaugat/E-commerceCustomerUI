import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./pages/categoryList/CategorySlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});

export default store;
