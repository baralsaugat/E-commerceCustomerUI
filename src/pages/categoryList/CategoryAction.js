import { fetchAllCategorySuccess } from "./CategorySlice";

import { getCategories } from "../../APIs/categoryAPI";

export const fetchCategory = () => async (dispatch) => {
  try {
    const result = await getCategories();

    dispatch(fetchAllCategorySuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    
  }
};
