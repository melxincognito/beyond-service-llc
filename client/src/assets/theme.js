import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // dark is overall paper background color
      dark: "#fafafa", // white
      main: "#801313", // maroon
    },
    secondary: {
      main: "#ff8f00", // yellow
      light: "rgba(255, 255, 255, 0.36)", // white and transparent
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    fontFamily: ["Fira Sans"], // global font variable for typography
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      // dark is overall paper background color
      dark: "#212121", // black
      main: "#23143e", // purple
    },
    secondary: {
      main: "#fafafa", // white
      light: "rgba(255, 255, 255, 0.60)", // white and transparent
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    fontFamily: ["Fira Sans"], // global font variable for typography
  },
});

export default theme;
