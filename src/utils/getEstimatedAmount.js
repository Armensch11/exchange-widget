import axios from "axios";
import { API_KEY } from "./constants";

const getEstimatedAmount = async (sendAmount, fromCrypto, toCrypto) => {
  // const config = {
  //   method: "get",
  //   maxBodyLength: Infinity,
  //   url: `https://api.changenow.io/v1/exchange-amount/${sendAmount}/${fromCrypto}_${toCrypto}?api_key=${API_KEY}`,
  //   headers: {},
  // };

  try {
    const response = await axios.get(
      `https://api.changenow.io/v1/exchange-amount/${sendAmount}/${fromCrypto}_${toCrypto}?api_key=${API_KEY}`
    );

    const estimatedAmount = response.data.estimatedAmount;

    return estimatedAmount;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getEstimatedAmount;
