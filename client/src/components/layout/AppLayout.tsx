import { Container, CssBaseline, useMediaQuery } from "@mui/material";
import React, { JSX } from "react";

import { createUser } from "@/features/auth";
import desktop from "./Desktop";
import mobile from "./Mobile";
import { theme } from "@/styles";

type AppLayoutProps = {
  children: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <CssBaseline />
      {isMediumScreen ? <mobile.Header /> : <desktop.Header />}
      <Container sx={{ pt: 18 }} component="main">
        {children}
      </Container>
    </>
  );
};
