import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  Stack,
  Toolbar,
  alpha,
  useMediaQuery,
} from "@mui/material";
import { FlaticonIcon, IconButton, SvgIcon } from "..";
import React, { JSX } from "react";

import { theme } from "@/styles";
import { useNavigate } from "react-router-dom";

const HeaderBar = (): JSX.Element => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        bgcolor: (theme) => alpha(theme.palette.background.default, 0.95),
        backdropFilter: "blur(12px)",
      }}
    >
      <Toolbar>
        <Grid container justifyContent="center">
          {isMediumScreen && (
            <Grid item xs>
              <IconButton>
                <FlaticonIcon icon="fi fi-rr-bars-sort" />
              </IconButton>
            </Grid>
          )}
          <Grid item xs={!isMediumScreen} display="flex" alignItems="center">
            <SvgIcon
              url="https://zyae.net/assets/images/brand/zyae/zyae_logo_color.svg"
              size={28}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Grid>
          {!isMediumScreen && (
            <Grid item xs={"auto"}>
              <Stack direction="row" justifyContent="center" spacing={1}>
                <Button variant="translucent">About</Button>
                <Button>Projects</Button>
                <Button>Github</Button>
                <Button>Contact</Button>
              </Stack>
            </Grid>
          )}

          <Grid item xs>
            <Stack direction="row" justifyContent={"right"} spacing={1}>
              {!isMediumScreen && <Button color="secondary">Log in</Button>}
              <Button variant="outlined" color="secondary">
                Sign up
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
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
