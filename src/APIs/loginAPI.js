import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "login";

export const loginApi = (frmDt) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.post(catApi, frmDt);
      resolve(data);
      console.log(data);
    } catch (error) {
      reject(error);
    }
  });
};
