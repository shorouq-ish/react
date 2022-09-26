import React from "react";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
function Filter() {
  return (
    // <FormControl >
    //   <Select
    //       value="Filter"
    //     //   onChange={handleChange}
    //     //   displayEmpty
    //     style={{
    //         backgroundColor: "white"
    //     }}
    //     inputProps={{ "aria-label": "Without label" }}
    //   >
    //     <MenuItem value="">
    //       <em>Filter</em>
    //     </MenuItem>
    //     <MenuItem value={10}>Ten</MenuItem>
    //     <MenuItem value={20}>Twenty</MenuItem>
    //     <MenuItem value={30}>Thirty</MenuItem>
    //   </Select>
    //   {/* <FormHelperText>Without label</FormHelperText> */}
    // </FormControl>
    
<FormControl sx={{ width: 200 , mb:4 }}>
  <InputLabel id="demo-simple-select-label">Filter By Region</InputLabel>
  <Select
  style={{
    backgroundColor: "white"
}}
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={age}
    label="Filter By Region"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Africa</MenuItem>
    <MenuItem value={20}>America</MenuItem>
    <MenuItem value={30}>Asia</MenuItem>
    <MenuItem value={40}>Europe</MenuItem>
    <MenuItem value={50}>Oceania</MenuItem>
  </Select>
</FormControl>
  );
}

export default Filter;
