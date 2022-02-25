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
    success: {
      main: "#801313", // maroon
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    h5: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    h4: {
      fontFamily: ["Lobster Two"],
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
    success: {
      main: "rgba(0, 128, 163, 0.77)", // blue
    },
  },
  typography: {
    h6: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    h5: {
      fontFamily: ["Lobster Two"], // custom h6 font for nav bar labels
    },
    h4: {
      fontFamily: ["Lobster Two"],
    },
    fontFamily: ["Fira Sans"], // global font variable for typography
  },
});

export default theme;
