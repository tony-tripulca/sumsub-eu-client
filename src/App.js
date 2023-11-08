import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider, createTheme } from "@mui/material";

import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import AppRouter from "./AppRouter";

import "./App.scss";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={customTheme()}>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

function customTheme() {
  return createTheme({
    typography: {
      fontFamily: `Ubuntu, Poppins, Quicksand, Roboto, Helvetica, Arial, "sans-serif"`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400,
      },
    },
    palette: {
      primary: {
        light: "#FD6C35",
        main: "#FD6C35",
        dark: "#C2472A",
        contrastText: "white",
      },
      secondary: {
        light: "#8F8F8F",
        main: "#8F8F8F",
        dark: "#333333",
        contrastText: "white",
      },
      plain: {
        light: "#fff",
        main: "#fff",
        dark: "#fff",
        contrastText: "black",
      },
    },
  });
}

export default App;
