import React from "react";
import logo from "../Images/logo.png";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

function LandingPage() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <ButtonGroup
        orientation="contained"
        aria-label="vertical outlined button group"
      >
        <Button variant="contained" color="error">
          Sorteo Instagram
        </Button>
        <Button variant="contained" color="success">
          Sorteo Equipos
        </Button>
        <Button variant="contained" color="secondary">
          Sorteo General
        </Button>
      </ButtonGroup>
    </>
  );
}

export default LandingPage;
