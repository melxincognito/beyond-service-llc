import { createTheme } from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#212121",
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
      dark: "#00b8d4",
      main: "#76ff03",
    },
    secondary: {
      main: "#311b92",
    },
  },
  typography: {
    fontFamily: ["Fira Sans"],
  },
});

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
});

export default theme;
