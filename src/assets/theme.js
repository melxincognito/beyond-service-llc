import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // dark is overall paper background color
      dark: "#fafafa", // white
      main: "#801313", // maroon
    },
    secondary: {
      dark: "rgba(233, 154, 93, 0.67)", // transparent orange
      main: "#000000", // black
      light: "rgba(255, 255, 255, 0.36)", // white and transparent
    },
    success: {
      main: "#660f0f", // maroon
    },
    accordion: {
      main: "rgba(7, 2, 14, 0.11)", // gray low opacity
      light: "rgba(255, 255, 255, 0.85)", // white and a little transparent
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
