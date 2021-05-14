import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1/";
const catApi = rootUrl + "category";

export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await axios.get(catApi);
      resolve(data);
      console.log(data)
    } catch (error) {
      reject(error);
    }
  });
};
