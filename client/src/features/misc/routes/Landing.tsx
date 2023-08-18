import {
  Box,
  Button,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { theme } from "@/styles";
import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user);

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      gap={16}
      alignItems="center"
    >
      <Box>
        <Typography
          variant="h1"
          fontSize={{
            xs: 36,
            sm: 46,
            md: 56,
          }}
          lineHeight={1.25}
        >
          From Vision to Reality,
          <br />
          One Project at a Time
        </Typography>
        <Typography
          color="textSecondary"
          fontSize={{
            sm: 16,
            md: 18,
          }}
          mt={2}
        >
          A hobbyist platform that hosts concept web apps.
        </Typography>
        <Box display="flex" gap={2} mt={4}>
          <Button variant="contained" color="primary" size="large">
            Check it out
          </Button>
          {!isSmallScreen && !user && (
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              onClick={() => navigate("/signup")}
            >
              Create account
            </Button>
          )}
        </Box>
      </Box>
      <CardMedia
        component="img"
        image="https://zyae.net/assets/images/hero-cards/temp-cards.svg"
        alt="hero-cards"
        sx={{
          display: "block",
          width: {
            xs: 300,
            sm: 350,
            md: 300,
            lg: 350,
            xl: 400,
          },
        }}
      />
    </Box>
  );
};

export const Landing = () => {
  return <Hero />;
};
