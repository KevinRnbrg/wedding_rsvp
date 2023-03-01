import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/HomeStyles.css";
import Place from "../components/Place";

const Home = () => {
  const [state, setState] = useState();

  return (
    <Box className="App">
      <Box className="outer-container">
        <h1 className="font-h1">Kelli ja Tanel</h1>
        <h2>15.06.2023</h2>
        <Link to="/invitation" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Anna teada oma tulekust (RSVP)</Button>
        </Link>
        <Box className="menu-buttons">
          <button className="menu-selection font-link">Asukoht</button>
          <button className="menu-selection font-link">
            Kingitused ja lilled
          </button>
          <button className="menu-selection font-link">Kava</button>
          <button className="menu-selection font-link">Riietumisstiil</button>
        </Box>
        <Place />
      </Box>
    </Box>
  );
};

export default Home;
