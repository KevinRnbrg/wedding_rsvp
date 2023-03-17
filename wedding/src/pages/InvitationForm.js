import React from "react";
import { Box } from "@mui/material";
import "../styles/App.css";
import "../styles/FormStyles.css";
import GuestForm from "../components/GuestForm"

const InvitationForm = () => {
  return (
    <Box className="App">
      <Box className="background-image">
        <Box className="outer-container" style={{paddingTop: "5%", paddingBottom: "5%"}}>
          <h2 className="font-default-heading">RSVP</h2>
          <Box className="form-light-box">
            <GuestForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default InvitationForm;
