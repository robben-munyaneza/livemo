import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#4A3C28" },
    secondary: { main: "#A67C52" },
    background: { default: "#FFFFFF", paper: "#FFFFFF" },
    text: { primary: "#000000", secondary: "#333333" },
    success: { main: "#2D5016" },
    warning: { main: "#D2691E" },
    error: { main: "#8B0000" },
    info: { main: "#1E3A8A" },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"].join(",") ,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, color: "primary" },
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 999 },
      },
    },
    MuiContainer: {
      defaultProps: { maxWidth: "lg" },
    },
  },
});
