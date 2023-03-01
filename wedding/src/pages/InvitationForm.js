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
          <Typography>Külalise ees- ja perekonnanimi:</Typography>
          <TextField></TextField>
          {/* checkboxes should be next to the question */}
          <Typography>Kas tuled?</Typography>
          <Checkbox />
          <Typography>Kas tuled kaaslasega?</Typography>
          <Checkbox />
          <Typography>Kaaslase ees- ja perekonnanimi:</Typography>
          <TextField></TextField>
          <Typography>
            Kas plaanid ööbida? (Kõigile külalistele ööbimine igal juhul tagatud
            ja määratud)
          </Typography>
          <Checkbox />
          <Typography>Millist toitu eelistad pearoana?</Typography>
          <RadioGroup aria-labelledby="food-choise" name="radio-buttons-group">
            <FormControlLabel value="liha" control={<Radio />} label="Liha" />
            <FormControlLabel
              value="linnuliha"
              control={<Radio />}
              label="Linnuliha"
            />
            <FormControlLabel value="kala" control={<Radio />} label="Kala" />
            <FormControlLabel
              value="ilmalihata"
              control={<Radio />}
              label="Ilma lihata"
            />
          </RadioGroup>
          {/* if +1 is checked then offer to choose a food for them aswell */}
          <Typography>Millist toitu eelistab kaaslane pearoana?</Typography>
          <RadioGroup aria-labelledby="food-choise" name="radio-buttons-group">
            <FormControlLabel value="liha" control={<Radio />} label="Liha" />
            <FormControlLabel
              value="linnuliha"
              control={<Radio />}
              label="Linnuliha"
            />
            <FormControlLabel value="kala" control={<Radio />} label="Kala" />
            <FormControlLabel
              value="ilmalihata"
              control={<Radio />}
              label="Ilma lihata"
            />
          </RadioGroup>
          <Typography>Kuidas plaanid pidutseda?</Typography>
          <RadioGroup
            aria-labelledby="partytime"
            name="radio-buttons-party-group"
          >
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Nii, et homset pole"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Söön koogi ära ja lähen magama"
            />
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="Saan parimaks sõbraks pruudi isaga"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="Tantsin terve õhtu peigmehe emaga"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="Ärkan hommikul esimesena"
            />
            <FormControlLabel
              value="5"
              control={<Radio />}
              label="Leian igast lauast uue sõbra"
            />
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
