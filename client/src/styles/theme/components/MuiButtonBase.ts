import { Components, Theme } from "@mui/material";

import { outlineFlash } from "../animations";

export const MuiButtonBase: Components<Theme>["MuiButtonBase"] = {
  styleOverrides: {
    root: [
      {
        ".MuiTouchRipple-root": {
          opacity: 0.25,
          filter: "blur(8px)",
        },

        "&:after": {
          content: `''`,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          borderRadius: "inherit",
          opacity: 0.25,
        },

        "&:focus": {
          "&:after": {
            animation: `${outlineFlash} .8s`,
          },
        },
        "&:active": {
          "&:after": {
            animation: "none",
          },
        },
      },
    ],
  },
};
