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
import { createSession, createUser, getGoogleAuthUrl } from "../api";

import axios from "axios";
import { theme } from "@/styles";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [signUpError, setSignUpError] = useState<null | string>(null);

  const [searchParams] = useSearchParams();
  const rd = searchParams.get("rd");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const displayName = e.currentTarget.displayName.value;
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    const userData = {
      displayName,
      email,
      password,
    };

    try {
      await createUser(userData);
      await createSession({
        email,
        password,
      });
      document.location.href = rd || "/";
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response?.status === 409) {
          setSignUpError(
            `${userData.email} is already taken. Please try another email address.`
          );
        } else {
          setSignUpError(
            "An error occurred while logging in. Please try again later."
          );
        }
      } else {
        setSignUpError("An unexpected error occurred. Please try again later.");
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
          Create an account
        </Typography>
        <Typography color="textSecondary">
          Let's get your account up and running
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
              autoComplete="username"
              name="displayName"
              required
              fullWidth
              id="displayName"
              label="Display Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
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
          {signUpError && (
            <Grid item xs={12}>
              <Typography color="error" fontSize={14}>
                {signUpError}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} mt={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Link
        to="/login"
        width="fit-content"
        color="text.secondary"
        fontSize={14}
      >
        Already have an account?
      </Link>
    </Container>
  );
};
