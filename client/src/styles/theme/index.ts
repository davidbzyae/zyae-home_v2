import { Shadows, createTheme, darken } from "@mui/material";

import { colors } from "./colors";

const _theme = createTheme();

export const theme = createTheme({
  shadows: Array(25).fill("none") as Shadows,
  shape: {
    borderRadius: 2,
  },
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    accent: _theme.palette.augmentColor({
      color: { main: colors.accent },
    }),
    text: {
      primary: colors.accent,
      secondary: darken(colors.accent, 0.24),
    },
    error: {
      main: "#ff6161",
    },
    background: {
      default: colors.bg,
    },
  },
});
