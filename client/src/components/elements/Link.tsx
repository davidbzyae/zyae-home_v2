import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

import { Link as ReactRouterLink } from "react-router-dom";

interface LinkProps extends MuiLinkProps {
  to: string;
}

export const Link = (props: LinkProps) => {
  return (
    <MuiLink {...props} component={ReactRouterLink} to={props.to ?? "#"} />
  );
};
