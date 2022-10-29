import logo from "./logo.png";
import "./App.css";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
