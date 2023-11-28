import PropTypes from "prop-types";
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
  const handleAmountChange = (event) => {
    onChange(+event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth sx={{ width: "450px" }}>
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
