import { keyframes } from "@emotion/react";

export const outlineFlash = keyframes({
  "0%": {
    outline: "solid transparent 0px",
  },
  "10%": {
    outline: "solid 1px",
  },
  "100%": {
    outline: "solid transparent 0px",
  },
});
