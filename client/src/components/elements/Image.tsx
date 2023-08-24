import { styled } from "@mui/material";

const StyledImage = styled("img")({
  "::before": {
    display: "block",
  },
});

type FlaticonIconProps = React.ComponentProps<typeof StyledImage> & {};

export const Image = (props: FlaticonIconProps) => {
  const { ...other } = props;

  return <StyledImage {...other} />;
};
