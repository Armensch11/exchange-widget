import { useState } from "react";
import PropTypes from "prop-types";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@mui/material";

import VirtualizedSelect from "../VirtualizedSelect/VirtualizedSelect";
const CryptoInput = ({
  ticker,
  tickerIconURL,
  onCryptoChange,
  listOfCurrencies,
}) => {
  const [amount, setAmount] = useState(0);
  //const [selectedCrypto, setSelectedCrypto] = useState(ticker);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // const handleCryptoChange = (event) => {
  //   // setSelectedCrypto(event.target.value);

  //   onCryptoChange(event.target.value);
  // };

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
        sx={{
          padding: "none",
          backgroundColor: "#F6F7F8",
          borderColor: "#E3EBEF",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {/* <Select
                labelId="crypto-select-label"
                id="crypto-select"
                value={ticker}
                onChange={handleCryptoChange}
                MenuProps={{
                  PaperProps: {
                    style: {
                      maxHeight: 150,
                    },
                  },
                }}
                sx={{
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  margin: "0",
                }}
                startAdornment={
                  <InputAdornment position="start">
                    <img
                      src={tickerIconURL}
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
              </Select> */}
              <VirtualizedSelect
                ticker={ticker}
                tickerIconURL={tickerIconURL}
                onCryptoChange={onCryptoChange}
                listOfCurrencies={listOfCurrencies}
              />
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
  onCryptoChange: PropTypes.func.isRequired,
  listOfCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default CryptoInput;
