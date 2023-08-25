import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  lighten,
  useMediaQuery,
} from "@mui/material";
import { Link, SvgIcon } from "@/components";
import { createSession, getGoogleAuthUrl } from "../api";

import axios from "axios";
import { theme } from "@/styles";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const LogIn = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [logInError, setLogInError] = useState<null | string>(null);

  const [searchParams] = useSearchParams();
  const rd = searchParams.get("rd");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const userData = {
      email,
      password,
    };

    try {
      await createSession(userData);
      document.location.href = rd || "/";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          setLogInError(
            "Invalid account details. Try again or reset your password."
          );
        } else {
          setLogInError(
            "An error occurred while logging in. Please try again later."
          );
        }
      } else {
        setLogInError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const handleGoogleClick = async () => {
    const authUrl = await getGoogleAuthUrl(rd);

    document.location.href = authUrl;
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%);",
        py: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 3,
        bgcolor: isSmallScreen
          ? "none"
          : lighten(theme.palette.background.default, 0.01),
        outline: isSmallScreen ? "none" : "solid 1px",
        outlineColor: (theme) => lighten(theme.palette.background.default, 0.1),
        borderRadius: 1.5,
      }}
    >
      <Box>
        <Typography variant="h5" fontSize={26}>
          Welcome back!
        </Typography>
        <Typography color="textSecondary">
          Please enter your account details
        </Typography>
      </Box>
      <Button variant="translucent" sx={{ gap: 2 }} onClick={handleGoogleClick}>
        <SvgIcon url="https://zyae.net/assets/images/brand/google/Google__G__Logo.svg" />
        Log in with Google
      </Button>
      <Divider sx={{ my: -1 }}>or</Divider>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          {logInError && (
            <Grid item xs={12}>
              <Typography color="error" fontSize={14}>
                {logInError}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}></Grid>
          <Grid item xs={12} mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Log in
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Link
        to="/signup"
        width="fit-content"
        color="text.secondary"
        fontSize={14}
      >
        Don't have an account?
      </Link>
    </Container>
  );
};
