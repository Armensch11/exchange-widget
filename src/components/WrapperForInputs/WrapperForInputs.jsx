import { useState, useEffect } from "react";
import CryptoInput from "../CryptoInput/CryptoInput";

import { BTC_ICON_URL, ETH_ICON_URL } from "../../utils/constants";
import { Button } from "@mui/material";
import getWithAxios from "../../utils/getCryptoListAxios";
import getMinAmount from "../../utils/getMinimalAmount";
import getEstimatedAmount from "../../utils/getEstimatedAmount";
import styles from "./WrapperForInputs.module.css";
import swap from "../../assets/swap.svg";


const WrapperForInputs = () => {
  const [selectedCrypto1, setSelectedCrypto1] = useState("btc");
  const [selectedCrypto2, setSelectedCrypto2] = useState("eth");

  const [leftCryptoURL, setLeftCryptoURL] = useState(BTC_ICON_URL);
  const [rightCryptoURL, setRightCryptoURL] = useState(ETH_ICON_URL);
  const [listOfCurrencies, setListOfCurrencies] = useState([]);
  const [minAmount, setMinAmount] = useState(0);
  const [estimatedAmount, setEstimatedAmount] = useState(0);
  const [enteredAmount, setEnteredAmount] = useState("");

  const handleSwapClick = () => {
    const temp = selectedCrypto1;
    setSelectedCrypto1(selectedCrypto2);
    setSelectedCrypto2(temp);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currencies = await getWithAxios();
        setListOfCurrencies(currencies);
        setLeftCryptoURL(
          currencies.find((el) => el.ticker === selectedCrypto1).image || ""
        );
        setRightCryptoURL(
          currencies.find((el) => el.ticker === selectedCrypto2).image || ""
        );
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [selectedCrypto1, selectedCrypto2]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const minAmountHolder = await getMinAmount(
          selectedCrypto1,
          selectedCrypto2
        );

        setMinAmount(minAmountHolder.minAmount);
        const sendAmount = enteredAmount
          ? enteredAmount
          : minAmountHolder.minAmount;
        const estimatedAmountHolder = await getEstimatedAmount(
          sendAmount,
          selectedCrypto1,
          selectedCrypto2
        );
        console.log(estimatedAmountHolder);
        setEstimatedAmount(estimatedAmountHolder);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, [selectedCrypto1, selectedCrypto2, enteredAmount]);

  return (
    <div className={styles.WrapperForInputs}>
      <CryptoInput
        ticker={selectedCrypto1}
        tickerIconURL={leftCryptoURL}
        value={enteredAmount ? enteredAmount : minAmount}
        onChange={(amount) => setEnteredAmount(amount)}
        onCryptoChange={(value) => setSelectedCrypto1(value)}
        listOfCurrencies={listOfCurrencies}
      />
      <Button onClick={handleSwapClick}>
        <img src={swap} alt="icon" style={{ width: "24px", height: "24px" }} />
      </Button>
      <CryptoInput
        ticker={selectedCrypto2}
        tickerIconURL={rightCryptoURL}
        value={estimatedAmount}
        onCryptoChange={(value) => setSelectedCrypto2(value)}
        listOfCurrencies={listOfCurrencies}
      />
  
    </div>
  );
};

export default WrapperForInputs;
