import { Box } from "@mui/material";

function Schedule() {
  return (
    <Box className="component-box">
      <Box className="light-box">
        <p className="font-default">
          Külaliste saabumist ootame vahemikus 14:00 – 15:00. Selles vahemikus
          saate teha check-ini ja sättida end valmis pidustusteks, mis hakkavad
          veidi hiljem.
        </p>
        <p className="font-default">
          Täpsema ajakavaga saab tutvuda koha peal.
        </p>
      </Box>
    </Box>
  );
}

export default Schedule;
