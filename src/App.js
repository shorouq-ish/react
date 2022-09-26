// import logo from "./logo.svg";
import "./CSS/App.css";
import Header from "./components/Header";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Cards from "./components/Cards";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";
import "@fontsource/nunito-sans";
import Search from "./components/Search";
import Filter from "./components/Filter";
import { Box } from "@mui/material";
import Image1 from './assets/al.svg';
import Image2 from './assets/af.svg';
import Image3 from './assets/al.svg';
import Image4 from './assets/us.svg';
import Image5 from './assets/de.svg';
import Image6 from './assets/dz.svg';
import Image7 from './assets/is.svg';
import Image8 from './assets/br.svg';
import { Route, Navigate, Routes, Switch} from 'react-router-dom';
import Details from "./Details";
import {Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Countries from "./Countries";

function App() {
  const navigate = useNavigate();
  return (
    
      <Routes>
          <Route exact path="/Details" element={<Details/>}  />
          <Route exact path="/" element={<Countries/>}  />

          </Routes>

  );
}

export default App;
