import axios from "axios";
import hash from "object-hash";
const getWithAxios =  () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://api.changenow.io/v1/currencies?active=true",
    headers: {},
  };

  return axios(config)
    .then(function (response) {
      const tempArr = JSON.parse(JSON.stringify(response.data));
      const hashedArr = tempArr.map((el) => {
        return { ...el, hash: hash(el) };
      });

      return hashedArr;
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);

      return [];
    });
};

export default getWithAxios;
