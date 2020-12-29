import React from "react";
import ReactDOM from "react-dom";

import "fontsource-roboto";

import App from "./components/App";
import theme from './components/theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';



ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
