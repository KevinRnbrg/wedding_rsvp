import { Box, Typography } from "@mui/material";

function Schedule() {
  return (
    <Box className="component-box">
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        Pidu algab kell 12:00. Kohal võiks olla juba kell 09:00 ajal.
      </Typography>
    </Box>
  );
}

export default Schedule;
