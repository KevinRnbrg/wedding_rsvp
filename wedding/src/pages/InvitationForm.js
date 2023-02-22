import React from "react";
import {
  Box,
  Checkbox,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import "../styles/App.css";
import "../styles/FormStyles.css";

const InvitationForm = () => {
  return (
    <Box className="App">
      <Box className="outer-container">
        <form /* onSubmit={handleSubmit} */>
          <Typography>RSVP</Typography>
          <Typography>1. Kirjuta oma ees- ja perekonnanimi:</Typography>
          <TextField></TextField>
          {/* checkboxes should be next to the question */}
          <Typography>2. Kas sa võtad üritusest osa?</Typography>
          <Checkbox />
          <Typography>3. Kas sinuga tuleb kaasa +1?</Typography>
          <Checkbox />
          <Typography>4. Kas sa jääd ööseks?</Typography>
          <Checkbox />
          <Typography>5. Vali üks kolmest toidust õhtusöögiks:</Typography>
          <RadioGroup aria-labelledby="food-choise" name="radio-buttons-group">
            <FormControlLabel
              value="karbonara"
              control={<Radio />}
              label="Karbonara"
            />
            <FormControlLabel
              value="bolognese"
              control={<Radio />}
              label="Bolognese"
            />
            <FormControlLabel value="ramen" control={<Radio />} label="Ramen" />
          </RadioGroup>
          {/* if +1 is checked then offer to choose a food for them aswell */}
          <Typography>
            6. Vali üks kolmest toidust õhtusöögiks +1-le:
          </Typography>
          <RadioGroup aria-labelledby="food-choise" name="radio-buttons-group">
            <FormControlLabel
              value="karbonara"
              control={<Radio />}
              label="Karbonara"
            />
            <FormControlLabel
              value="bolognese"
              control={<Radio />}
              label="Bolognese"
            />
            <FormControlLabel value="ramen" control={<Radio />} label="Ramen" />
          </RadioGroup>
          <Box className="save-button">
            <Button variant="contained" type="submit">
              Saada vastus
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default InvitationForm;
