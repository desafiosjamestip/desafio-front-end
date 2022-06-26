import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[700],
      light: "#8e8e8e",
      dark: "#373737",
    },
    secondary: {
      main: grey[600],
      light: "#a4a4a4",
      dark: "#494949",
    },
  },
});
