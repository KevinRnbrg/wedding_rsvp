import { Box } from "@mui/material";

function Clothes() {
  return (
    <Box className="component-box">
      <Box className="light-box">
        <p className="font-default">
          Palume kanda pidulikku riietust.
        </p>
        <p className="font-default">
          Järgmiseks hommikuks võtke kaasa mugavad riided ja kiiremad saavad
          järgmisel hommikul pidustutest taastuda mõisa hubases spaas.
        </p>
        <p className="font-default">
          PS! Tseremoonia toimub plaani järgi mõisahoovis ning järgnevad
          pidustused sisetingimustes.
        </p>
      </Box>
    </Box>
  );
}

export default Clothes;
