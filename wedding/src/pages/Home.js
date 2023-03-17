import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/HomeStyles.css";
import Place from "../components/Place";
import Gifts from "../components/Gifts";
import Schedule from "../components/Schedule";
import Clothes from "../components/Clothes";

const Home = () => {

  const [hidePlace, setHidePlace] = useState(false);
  const [hideGifts, setHideGifts] = useState(true);
  const [hideSchedule, setHideSchedule] = useState(true);
  const [hideClothes, setHideClothes] = useState(true);

  function handlePlaceChange() {
    if (hidePlace === false) {

    }
    else {
      setHidePlace(s => !s);
      setHideGifts(true);
      setHideSchedule(true);
      setHideClothes(true);
    }
  }
  function handleGiftsChange() {
    if (hideGifts === false) {

    }
    else {
      setHideGifts(s => !s)
      setHidePlace(true);
      setHideSchedule(true);
      setHideClothes(true);
    }
  }
  function handleScheduleChange() {
    if (hideSchedule === false) {

    }
    else {
      setHideSchedule(s => !s)
      setHideGifts(true);
      setHidePlace(true);
      setHideClothes(true);
    }
  }
  function handleClothesChange() {
    if (hideClothes === false) {

    }
    else {
      setHideClothes(s => !s)
      setHideGifts(true);
      setHideSchedule(true);
      setHidePlace(true);
    }
  }

  return (
    <Box className="App">
      <Box className="background-image">
        <Box className="outer-container">
          <h1 className="font-h1">Kelli ja Tanel</h1>
          <h2>15.06.2023</h2>
          <Link to="/invitation" style={{ textDecoration: "none" }}>
            <Button id="rsvp-button" variant="outlined">Anna teada oma tulekust (RSVP)</Button>
          </Link>
          <Box className="menu-buttons">
            <button id="id-place" className="menu-selection font-link" onClick={() => {handlePlaceChange();}}>Asukoht</button>
            <button id="id-gifts" className="menu-selection font-link" onClick={() => {handleGiftsChange();}}>
              Kingitused ja lilled
            </button>
            <button id="id-schedule" className="menu-selection font-link" onClick={() => {handleScheduleChange();}}>Kava</button>
            <button id="id-clothes" className="menu-selection font-link" onClick={() => {handleClothesChange();}}>Riietumisstiil</button>
          </Box>
          <hr style={{
            background: 'black',
            color: 'black',
            height: '3px',
            width: '90%'
          }}/>
          {!hidePlace ? <Place /> : null}
          {!hideGifts ? <Gifts /> : null}
          {!hideClothes ? <Clothes /> : null}
          {!hideSchedule ? <Schedule /> : null}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
