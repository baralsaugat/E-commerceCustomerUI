import { getProducts } from "../../APIs/ProductAPI";

import { fetchAllProductSuccess } from "./ProductSlice";

export const fetchProduct = () => async (dispatch) => {
  try {
    const result = await getProducts();

    dispatch(fetchAllProductSuccess(result));
    console.log(result);
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
  }
};
