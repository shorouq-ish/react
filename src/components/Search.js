import React from "react";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { createTheme } from "@mui/material/styles";
import { TextField } from "@mui/material";

function Search() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#757ce8",
        main: "#3f50b5",
        dark: "#002884",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });

  return (
    <TextField
      sx={{ width:{ lg:"35%", xl:"35%", md: "35%", sm:"35%", xs:"80%"} , mb:4}}
      style={{
        backgroundColor: "white",
      }}
      placeholder="Search for a country..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    ></TextField>
  );
}

export default Search;
