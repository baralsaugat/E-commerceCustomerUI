import { addAllUserSuccess } from "./SignUpSlice";

import { addUser } from "../../APIs/signUpApi";

export const addAllUsers = (frmdt) => async (dispatch) => {
  try {
    const result = await addUser(frmdt);

    dispatch(addAllUserSuccess(result));
  } catch (error) {}
};
