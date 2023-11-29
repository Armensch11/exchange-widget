import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@mui/material";
import lineVertical from "../../assets/lineVertical.svg";
import VirtualizedSelect from "../VirtualizedSelect/VirtualizedSelect";

const CryptoInput = ({
  ticker,
  tickerIconURL,
  onCryptoChange,
  listOfCurrencies,
  value,
  onChange,
}) => {
  const [inputWidth, setInputWidth] = useState(null);

  const handleAmountChange = (event) => {
    onChange(+event.target.value);
  };
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.clientWidth);
    }
  }, []);

  return (
    <FormControl
      variant="outlined"
      fullWidth
      sx={{ maxWidth: "450px", minWidth: "300px" }}
      ref={inputRef}
    >
      <InputLabel htmlFor="crypto-amount"></InputLabel>
      <TextField
        id="crypto-amount"
        type="number"
        variant="outlined"
        fullWidth
        value={value}
        onChange={handleAmountChange}
        sx={{
          padding: "none",
          backgroundColor: "#F6F7F8",
          borderColor: "#E3EBEF",
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img src={lineVertical} alt="vertical line" />
              <VirtualizedSelect
                ticker={ticker}
                tickerIconURL={tickerIconURL}
                onCryptoChange={onCryptoChange}
                listOfCurrencies={listOfCurrencies}
                parentWidth={inputWidth}
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
  onChange: PropTypes.func,
  listOfCurrencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.number,
};
export default CryptoInput;
