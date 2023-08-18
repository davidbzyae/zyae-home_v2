import { Components, Theme } from "@mui/material";

import { outlineFlash } from "../animations";
import { sizes } from "..";

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
          borderRadius: `${sizes["large"] / 2}px`,
          opacity: 0.5,
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
