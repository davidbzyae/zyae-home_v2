import { Icon, styled } from "@mui/material";

import { JSX } from "react";

type StyledIconProps = {
  size?: number;
};

const StyledIcon = styled(Icon)(({ size }: StyledIconProps) => {
  return {
    "> img": {
      display: "block",
      aspectRatio: "1 / 1",
    },
    overflow: "visible",
    textAlign: "center",
    fontSize: size,
  };
});

interface SvgIconProps extends React.ComponentProps<typeof StyledIcon> {
  url: string;
}

export const SvgIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <StyledIcon {...props} size={props.size || 16}>
      <img src={props.url} />
    </StyledIcon>
  );
};
