import { Box, Typography } from "@mui/material";

function Clothes() {
  return (
    <Box className="component-box">
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        Palume kanda pidulikku riietust.
      </Typography>
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        Järgmiseks hommikuks võtke kaasa mugavad riided ja kiiremad saavad
        järgmisel hommikul pidustutest taastuda mõisa hubases spaas.
      </Typography>
      <Typography sx={{ mt: "2rem", px: "2rem" }}>
        PS! Tseremoonia toimub plaani järgi mõisahoovis ning järgnevad
        pidustused sisetingimustes.
      </Typography>
    </Box>
  );
}

export default Clothes;
