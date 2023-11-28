import { Typography, TextField, Box, Button } from "@mui/material";
import styles from "./AddressInput.module.css";

const AddressInput = () => {
  return (
    <div className={styles.addressWrapper}>
      <Typography
        sx={{
          fontFamily: "Roboto",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "23px",
          color: "#282828",
          marginBottom: "8px",
        }}
      >
        Your Ethereum Address
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField fullWidth sx={{ marginRight: "36px" }}></TextField>
        <Button variant="contained" sx={{ width: "205px" }}>
          exchange
        </Button>
      </Box>
    </div>
  );
};

export default AddressInput;
