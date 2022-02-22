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
    },
  },
  typography: {
    fontFamily: ["Fira Sans"],
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
    },
  },
  typography: {
    fontFamily: ["Fira Sans"],
  },
});

export default theme;
