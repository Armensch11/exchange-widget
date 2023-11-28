import axios from "axios";
import { API_KEY } from "./constants";

const getMinAmount = async (selectedCrypto1, selectedCrypto2) => {
  // const config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `https://api.changenow.io/v1/min-amount/${selectedCrypto1}_${selectedCrypto2}?api_key=${API_KEY}`,
  //   headers: {},
  // };

  try {
    const response = await axios.get(
      `https://api.changenow.io/v1/min-amount/${selectedCrypto1}_${selectedCrypto2}?api_key=${API_KEY}`
    );

    const minAmount = response.data;

    return minAmount;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getMinAmount;
