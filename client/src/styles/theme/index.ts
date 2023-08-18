import { MuiButton, MuiButtonBase, MuiIconButton } from "./components";
import { createTheme, darken } from "@mui/material";

import { colors } from "./colors";
import { sizes } from "./sizes";

export { colors } from "./colors";
export { sizes } from "./sizes";

const _theme = createTheme();

export const theme = createTheme({
  shape: {
    borderRadius: sizes.medium / 2,
  },
  sizes,
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
  components: {
    MuiButtonBase,
    MuiButton,
    MuiIconButton,
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});
