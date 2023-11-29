import PropTypes from "prop-types";
import Select from "react-select";
import styles from "./VirtualizedSelect.module.css";

const VirtualizedSelect = ({
  ticker,
  tickerIconURL,
  onCryptoChange,
  listOfCurrencies,
  parentWidth,
}) => {
    const options = listOfCurrencies.map((currency) => ({
      value: currency.ticker,
      label: (
        <div>
          <img
            src={currency.image}
            alt={currency.ticker}
            style={{ marginRight: "8px", width: "20px", height: "20px" }}
          />
          {`${currency.ticker.toUpperCase()} - ${currency.name}`}
        </div>
      ),
    }));

    return (
      <div className={styles.wrapperSelect}>
      <img
        className={styles.wrapper__image}
        src={tickerIconURL}
        alt="icon"
        style={{ width: "24px", height: "24px" }}
      />
        <Select
          options={options}
        value={{ value: ticker, label: ticker.toUpperCase() }}
          onChange={(selectedOption) => onCryptoChange(selectedOption.value)}
          contentRenderer={(props) => (
            <div>{props.value && props.value.label}</div>
          )}
          isSearchable={true}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "none",
              backgroundColor: "#F6F7F8",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              width: parentWidth,

              position: "absolute",
              top: 40,
              left: -250,
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
