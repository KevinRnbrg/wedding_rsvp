import * as React from "react";
import {
  FormControl,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
} from "@mui/material";
import { useRef, useState } from "react";
import "../styles/FormStyles.css";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BodyForm = (props) => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState(false);
  const [companion, setCompanion] = useState(false);
  const [compname, setCompname] = useState("");
  const [staynight, setStaynight] = useState(false);
  const [foodpref, setFoodpref] = useState("");
  const [compfoodpref, setCompfoodpref] = useState("");
  const [party, setParty] = useState("");

  const nameRef = useRef("");
  const attendanceRef = useRef(null);
  const companionRef = useRef(null);
  const compnameRef = useRef("");
  const staynightRef = useRef(null);
  const foodprefRef = useRef("");
  const compfoodprefRef = useRef("");
  const partyRef = useRef("");

  const [openWarning, setOpenWarning] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

    const postData = async () => {
        try {
            await axios
                .post("http://localhost:8080/guestform/saveinfo", {
                    name: name,
                    attendance: attendance,
                    companion: companion,
                    compname: compname,
                    staynight: staynight,
                    foodpref: foodpref,
                    compfoodpref: compfoodpref,
                    party: party
                }).then(function (res) {
                    console.log(res); /* siia ei joua midagi kui saata infot */
                    if (res.success) { 
                        setOpenSuccess(true);
                    }
                });          
        } catch (error) {
            console.log(error);
            setOpenError(true);
        }
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || foodpref === "" || party === "") {
      setOpenWarning(true);
      console.log("sinu viga");
    } else {
        if (companion === true && (compname === "" || compfoodpref === "")) {
            setOpenWarning(true);
            console.log("kaaslase viga");
        } else {
            postData();
        }  
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenWarning(false);
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        sx={{
          pt: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box className="form-box">
          <Box>
            <p className="font-default-label-bold">
              Külalise ees- ja perekonnanimi:<span className="red">*</span>
            </p>
            <TextField
              className="form-field"
              value={name}
              inputRef={nameRef}
              onChange={(e) => setName(e.target.value)}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            className="form-field"
            value={attendance}
            inputRef={attendanceRef}
            onChange={(e) => setAttendance(e.target.checked)}
            label={
              <p className="font-default-label-bold">
                Kas tuled?<span className="red">*</span>
              </p>
            }
            type="checkbox"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            className="form-field"
            value={companion}
            inputRef={companionRef}
            onChange={(e) => setCompanion(e.target.checked)}
            label={
              <p className="font-default-label-bold">
                Kas tuled kaaslasega?<span className="red">*</span>
              </p>
            }
            type="checkbox"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box>
            <p className="font-default-label-bold">
              Kaaslase ees- ja perekonnanimi:
            </p>
            <TextField
              className="form-field"
              value={compname}
              inputRef={compnameRef}
              onChange={(e) => setCompname(e.target.value)}
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>
          <FormControlLabel
            control={<Checkbox />}
            className="form-field"
            value={staynight}
            inputRef={staynightRef}
            onChange={(e) => setStaynight(e.target.checked)}
            label={
              <p className="font-default-label-bold">
                Kas plaanid ööbida? (Kõigile külalistele ööbimine igal juhul
                tagatud ja määratud)<span className="red">*</span>
              </p>
            }
            type="checkbox"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Box>
            <p className="font-default-label-bold">
              Millist toitu eelistad pearoana?<span className="red">*</span>
            </p>
            <RadioGroup
              className="form-field"
              value={foodpref}
              inputRef={foodprefRef}
              onChange={(e) => setFoodpref(e.target.value)}
              label="Millist toitu eelistad pearoana?"
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            >
              <FormControlLabel
                value="liha"
                control={<Radio />}
                label={<p className="font-default-label">Liha</p>}
              />
              <FormControlLabel
                value="linnuliha"
                control={<Radio />}
                label={<p className="font-default-label">Linnuliha</p>}
              />
              <FormControlLabel
                value="kala"
                control={<Radio />}
                label={<p className="font-default-label">Kala</p>}
              />
              <FormControlLabel
                value="ilmalihata"
                control={<Radio />}
                label={<p className="font-default-label">Ilma lihata</p>}
              />
            </RadioGroup>
          </Box>
          <Box>
            <p className="font-default-label-bold">
              Millist toitu eelistab kaaslane pearoana?
            </p>
            <RadioGroup
              className="form-field"
              value={compfoodpref}
              inputRef={compfoodprefRef}
              onChange={(e) => setCompfoodpref(e.target.value)}
              label="Millist toitu eelistab kaaslane pearoana?"
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            >
              <FormControlLabel
                value="liha"
                control={<Radio />}
                label={<p className="font-default-label">Liha</p>}
              />
              <FormControlLabel
                value="linnuliha"
                control={<Radio />}
                label={<p className="font-default-label">Linnuliha</p>}
              />
              <FormControlLabel
                value="kala"
                control={<Radio />}
                label={<p className="font-default-label">Kala</p>}
              />
              <FormControlLabel
                value="ilmalihata"
                control={<Radio />}
                label={<p className="font-default-label">Ilma lihata</p>}
              />
            </RadioGroup>
          </Box>
          <Box>
            <p className="font-default-label-bold">
              Kuidas plaanid pidutseda?<span className="red">*</span>
            </p>
            <RadioGroup
              aria-labelledby="partytime"
              name="radio-buttons-party-group"
              className="form-field"
              value={party}
              inputRef={partyRef}
              onChange={(e) => setParty(e.target.value)}
              label="Kuidas plaanid pidutseda?"
              type="string"
              InputLabelProps={{
                shrink: true,
              }}
            >
              <FormControlLabel
                value="Nii, et homset pole"
                control={<Radio />}
                label={
                  <p className="font-default-label">Nii, et homset pole</p>
                }
              />
              <FormControlLabel
                value="Söön koogi ära ja lähen magama"
                control={<Radio />}
                label={
                  <p className="font-default-label">
                    Söön koogi ära ja lähen magama
                  </p>
                }
              />
              <FormControlLabel
                value="Saan parimaks sõbraks pruudi isaga"
                control={<Radio />}
                label={
                  <p className="font-default-label">
                    Saan parimaks sõbraks pruudi isaga
                  </p>
                }
              />
              <FormControlLabel
                value="Tantsin terve õhtu peigmehe emaga"
                control={<Radio />}
                label={
                  <p className="font-default-label">
                    Tantsin terve õhtu peigmehe emaga
                  </p>
                }
              />
              <FormControlLabel
                value="Ärkan hommikul esimesena"
                control={<Radio />}
                label={
                  <p className="font-default-label">Ärkan hommikul esimesena</p>
                }
              />
              <FormControlLabel
                value="Leian igast lauast uue sõbra"
                control={<Radio />}
                label={
                  <p className="font-default-label">
                    Leian igast lauast uue sõbra
                  </p>
                }
              />
            </RadioGroup>
          </Box>
          <Box className="save-button">
            <Button variant="contained" type="submit">
              Saada vastus
            </Button>
          </Box>
        </Box>
      </FormControl>
      <Snackbar
        open={openWarning}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Täida kõik tärniga märgitud väljad!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Vastus edukalt saadetud!
        </Alert>
      </Snackbar>
      <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Vastuse saatmisel tekkis tõrge!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default BodyForm;
