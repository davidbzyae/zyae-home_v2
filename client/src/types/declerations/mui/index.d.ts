import { PaletteColor } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    sizes: {
      small: number;
      medium: number;
      large: number;
    };
  }
  interface ThemeOptions {
    sizes: {
      small: number;
      medium: number;
      large: number;
    };
  }
  interface Palette {
    accent: PaletteColor;
  }
  interface PaletteOptions {
    accent: PaletteColor;
  }
}
