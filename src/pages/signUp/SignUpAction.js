import { addAllUserSuccess, requestPending } from "./SignUpSlice";

import { addUser } from "../../APIs/signUpApi";

export const addAllUsers = (frmdt) => async (dispatch) => {
  try {
    dispatch(requestPending());
    const result = await addUser(frmdt);

    dispatch(addAllUserSuccess(result));
  } catch (error) {}
};
