import { Typography } from "@mui/material";
import styles from "./Title.module.css"
const Title = () => {
  return (
    <div className={styles.header}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "300",
          fontSize: "50px",
          lineHeight: "60px",
          color: "#282828",
        }}
      >
        Crypto Exchange
      </Typography>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "20px",
          color: "#282828",
        }}
      >
        Exchange fast and easy
      </Typography>
    </div>
  );
};

export default Title;
