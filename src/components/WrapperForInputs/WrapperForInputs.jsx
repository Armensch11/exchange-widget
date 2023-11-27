import CryptoInput from "../CryptoInput/CryptoInput";
import { BTC_ICON_URL, ETH_ICON_URL } from "../../utils/constants";
import { Button, Icon } from "@mui/material";

import styles from "./WrapperForInputs.module.css";
import swap from "../../assets/swap.svg";

const WrapperForInputs = () => {
  return (
    <div className={styles.WrapperForInputs}>
      <CryptoInput ticker="btc" tickerIconURL={BTC_ICON_URL} />
      <Button
        startIcon={
          <img
            src={swap}
            alt="icon"
            style={{ width: "24px", height: "24px" }}
          />
        }
      ></Button>
      <CryptoInput ticker="eth" tickerIconURL={ETH_ICON_URL} />
    </div>
  );
};

export default WrapperForInputs;
