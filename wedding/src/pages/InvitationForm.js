import React from "react";
import { Box, Typography } from "@mui/material";
import "../styles/App.css";
import "../styles/FormStyles.css";
import GuestForm from "../components/GuestForm"

const InvitationForm = () => {
  return (
    <Box className="App">
      <Box className="outer-container">
        <Typography>RSVP</Typography>
        <GuestForm />
      </Box>
    </Box>
  );
};

export default InvitationForm;
