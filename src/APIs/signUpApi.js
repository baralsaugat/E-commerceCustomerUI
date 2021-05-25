import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const signUpApi = rootUrl + "clientuser";

export const addUser = (frmDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(signUpApi, frmDt);
      resolve(data);
      console.log(data);
    } catch (error) {
      reject(error);
    }
  });
};
