import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const prodApi = rootUrl + "product";

export const getProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(prodApi);
      resolve(data);
    console.log(data)
    } catch (error) {
      reject(error);
    }
  });
};
