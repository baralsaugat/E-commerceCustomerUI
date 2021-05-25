import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./pages/categoryList/CategorySlice";
import productReducer from "./pages/productList/ProductSlice";
import signUpReducer from "./pages/signUp/SignUpSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    signup: signUpReducer,
  },
});

export default store;
