import { Container, CssBaseline } from "@mui/material";
import React, { JSX } from "react";

const HeaderBar = (): JSX.Element => {
  return <>HeaderBar</>;
};

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <CssBaseline />
      <HeaderBar />
      <Container sx={{ pt: 18 }} component="main">
        {children}
      </Container>
    </>
  );
};
