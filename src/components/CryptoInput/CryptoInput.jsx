import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  Icon,
} from "@mui/material";
import getWithAxios from "../../utils/getCryptoListAxios";

const CryptoInput = ({ ticker, tickerIconURL }) => {
  const [amount, setAmount] = useState(0);
  const [selectedCrypto, setSelectedCrypto] = useState(ticker);
  const [listOfCurrencies, setListOfCurrencies] = useState([]);
  const [tickerIcon, setTickerIcon] = useState(tickerIconURL);
  //const [selectedLeft, setSelectedLeft] = useState("");
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCryptoChange = (event) => {
    setSelectedCrypto(event.target.value);
    const link = listOfCurrencies.filter(
      (el) => el.ticker === event.target.value
    );

    setTickerIcon(link[0].image);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currencies = await getWithAxios();
        setListOfCurrencies(currencies);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="crypto-amount"></InputLabel>
      <TextField
        id="crypto-amount"
        type="number"
        variant="outlined"
        fullWidth
        value={amount}
        onChange={handleAmountChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Icon></Icon>
              <Select
                labelId="crypto-select-label"
                id="crypto-select"
                value={selectedCrypto}
                onChange={handleCryptoChange}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      src={tickerIcon}
                      alt="icon"
                      style={{ width: "24px", height: "24px" }}
                    />
                  </InputAdornment>
                }
              >
                {listOfCurrencies.map((el) => (
                  <MenuItem key={el.hash} value={el.ticker}>
                    {el.ticker.toUpperCase()}
                  </MenuItem>
                ))}
              </Select>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};
CryptoInput.propTypes = {
  ticker: PropTypes.string.isRequired,
  tickerIconURL: PropTypes.string.isRequired,
};
export default CryptoInput;
