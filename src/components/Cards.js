import React from "react";
import { Card } from "@mui/material";
import {CardContent} from "@mui/material";
import {CardMedia} from "@mui/material";
import Image1 from '../assets/al.svg';
import {Typography} from "@mui/material";

import { spacing } from '@mui/material';
import '../CSS/cards.css';

import "@fontsource/nunito-sans";
import DetailsRender from "../Details";
import {Link} from "@mui/material";
// import {Link} from '@material-ui/core/Link';
// import { BrowserRouter as Router, Route, Link } from "react";
import { BrowserRouter as Router, Routes, Switch} from 'react-router-dom';
function Cards(props) {
  // const img = require.context('assets/al.svg', true);
  
  return(
    
  <div class="mainDiv" >
    <a href="/Details"><Card sx={{ml:{xs: 3, sm: 0}, mr:{xs: 3, sm: 0} }}>
    <CardMedia
        component="img"
        height="170"
        image={props.img}
        alt="flag"
        sx={{mb: 2}}
      />
      <CardContent >
      <Typography gutterBottom  component="div" sx={{fontWeight: '900', fontSize: '1.3rem', fontFamily:'Nunito Sans', mb: 2}} >
          {props.countryName}
        </Typography>
        <Typography>
        <div ><span class="property">Population:</span><span class="value">{props.population}</span></div>
        <div ><span class="property">Region:</span><span class="value">{props.region}</span></div>
        <div ><span class="property">Capital:</span><span class="value">{props.capital}</span></div>
        </Typography>
      </CardContent>
    </Card></a>
  </div>
  );
}

export default Cards;
