import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#fafafa",
      main: "#801313",
    },
    secondary: {
      main: "#ff8f00",
    },
  },
  typography: {
    fontFamily: ["Fira Sans"],
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      dark: "#212121",
      main: "#311b92",
    },
    secondary: {
      main: "#212121",
    },
  },
  typography: {
    fontFamily: ["Fira Sans"],
  },
});

export default theme;
