import { configureStore } from "@reduxjs/toolkit";

import categoryReducer from "./pages/categoryList/CategorySlice";
import productReducer from "./pages/productList/ProductSlice";
import signUpReducer from "./pages/signUp/SignUpSlice";
import loginReducer
 from "./pages/login/LoginSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    signup: signUpReducer,
    login: loginReducer,
  },
});

export default store;
