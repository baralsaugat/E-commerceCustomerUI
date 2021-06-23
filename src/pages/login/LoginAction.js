import { loginSuccess, requestFail, isPending } from "./LoginSlice";

import { loginApi } from "../../APIs/loginAPI";

export const sendLogin = (frmDt) => async (dispatch) => {
  try {
    dispatch(isPending());

    const result = await loginApi(frmDt);
    console.log(result);

    const { accessJWT, refreshJWT } = result;
    accessJWT && sessionStorage.setItem("accessJWT", accessJWT);
    refreshJWT && localStorage.setItem("ecommerceRefreshJWT", refreshJWT);

    dispatch(loginSuccess(result));
  } catch (error) {
    const err = {
      status: "error",
      message: error.message,
    };
    dispatch(requestFail(err));
  }
};
