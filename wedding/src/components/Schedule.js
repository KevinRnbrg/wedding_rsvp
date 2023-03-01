import { Box, Typography } from "@mui/material";

function Schedule() {
  return (
    <Box className="component-box">
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        Külaliste saabumist ootame vahemikus 14:00 – 15:00. Selles vahemikus
        saate teha check-ini ja sättida end valmis pidustusteks, mis hakkavad
        veidi hiljem.
      </Typography>
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        Täpsema ajakavaga saab tutvuda koha peal.
      </Typography>
    </Box>
  );
}

export default Schedule;
