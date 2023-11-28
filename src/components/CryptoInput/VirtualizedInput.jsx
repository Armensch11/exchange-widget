import PropTypes from "prop-types";
import Select from "react-select";

const VirtualizedInput = ({
  ticker,
  tickerIconURL,
  onCryptoChange,
  listOfCurrencies,
}) => {
  const options = listOfCurrencies.map((currency) => ({
    value: currency.ticker,
    label: currency.ticker.toUpperCase(),
  }));

  return (
    <div>
      <img
        src={tickerIconURL}
        alt="icon"
        style={{ width: "24px", height: "24px" }}
      />
      <Select
        options={options}
        value={{ value: ticker, label: ticker.toUpperCase() }}
        onChange={(selectedOption) => onCryptoChange(selectedOption.value)}
        isSearchable={true}
        style={{ height: "300px" }}
      />
    </div>
  );
};

VirtualizedInput.propTypes = {
  ticker: PropTypes.string.isRequired,
  tickerIconURL: PropTypes.string.isRequired,
  onCryptoChange: PropTypes.func.isRequired,
  listOfCurrencies: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VirtualizedInput;
