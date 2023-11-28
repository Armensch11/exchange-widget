import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./VirtualizedSelect.module.css";

const VirtualizedSelect = ({
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
    <div className={styles.wrapperSelect}>
      <img className={styles.wrapper__image}
        src={tickerIconURL}
        alt="icon"
        style={{ width: "24px", height: "24px" }}
      />
      <Select
        options={options}
        value={{ value: ticker, label: ticker.toUpperCase() }}
        onChange={(selectedOption) => onCryptoChange(selectedOption.value)}
        isSearchable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "none",
            backgroundColor: "#F6F7F8",
          }),
        }}
      />
    </div>
  );
};

VirtualizedSelect.propTypes = {
  ticker: PropTypes.string.isRequired,
  tickerIconURL: PropTypes.string.isRequired,
  onCryptoChange: PropTypes.func.isRequired,
  listOfCurrencies: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default VirtualizedSelect;
