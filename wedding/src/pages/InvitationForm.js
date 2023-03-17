import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/App.css";
import "../styles/FormStyles.css";
import GuestForm from "../components/GuestForm"

const InvitationForm = () => {
  return (
    <Box className="App">
      <Box className="background-image">
        <Box className="outer-container" style={{paddingTop: "5%", paddingBottom: "5%"}}>
          <Typography>RSVP</Typography>
          <GuestForm />
        </Box>
      </Box>
    </Box>
  );
};

export default InvitationForm;
