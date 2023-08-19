import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  ListItemIcon,
  MenuItem,
  MenuList,
  Stack,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import { FlaticonIcon, IconButton, LinkButton, SvgIcon } from "..";

import { deleteSession } from "@/features/auth";
import { useAppSelector } from "@/hooks";
import { useNavigate } from "react-router-dom";
import { usePopover } from "@/hooks";
import { useRef } from "react";

const AccountControls = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);

  const profilePopover = usePopover();
  const notificationsPopover = usePopover();

  const notificationsRef = useRef<HTMLButtonElement>(null);

  const handleLogOut = async () => {
    await deleteSession();
    document.location.href = "/login";
  };

  return (
    <>
      {user ? (
        <Stack direction="row" justifyContent={"right"} spacing={1}>
          <IconButton
            onClick={notificationsPopover.open}
            ref={notificationsRef}
            variant={notificationsPopover.isOpen ? "translucent" : undefined}
          >
            <FlaticonIcon icon="fi fi-rr-bell" />
          </IconButton>
          <notificationsPopover.Element {...notificationsPopover.elementProps}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              p={1}
              px={1.5}
            >
              <FlaticonIcon icon="ff fi-rr-bell" />
              <Typography fontSize={18}>Notifications</Typography>
            </Stack>
            <Divider />
            <Box
              width={{ md: 400, sm: 300, xs: 300 }}
              height={150}
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <FlaticonIcon icon="fi fi-rr-bell-slash" size={40} />
              <Typography fontSize={18} fontWeight={600}>
                Nothing here yet
              </Typography>
            </Box>
          </notificationsPopover.Element>
          <Button
            variant={profilePopover.isOpen ? "translucent" : "text"}
            sx={{ pl: 0.5, pr: 1.25 }}
            onClick={profilePopover.open}
          >
            <Avatar
              sx={{ height: 30, width: 30 }}
              alt={`${user.profile.displayName}'s profile`}
              src={user.profile.thumbnail[0].url}
            />
            <FlaticonIcon
              icon={`fi fi-rr-angle-small-${
                profilePopover.isOpen ? "up" : "down"
              }`}
              size={16}
              sx={{ paddingTop: profilePopover.isOpen ? 0 : 1 }}
            />
          </Button>
          <profilePopover.Element {...profilePopover.elementProps}>
            <MenuList>
              <MenuItem
                onClick={() => {
                  profilePopover.close();
                  notificationsRef.current?.click();
                }}
              >
                <ListItemIcon>
                  <FlaticonIcon icon="fi fi-rr-bell" />
                </ListItemIcon>
                Notifications
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ListItemIcon>
                  <FlaticonIcon icon="fi fi-rr-exit" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </MenuList>
          </profilePopover.Element>
        </Stack>
      ) : (
        <Stack direction="row" justifyContent={"right"} spacing={1}>
          <LinkButton
            color="secondary"
            to="login"
            activeProps={{ variant: "contained" }}
          >
            Log in
          </LinkButton>
          <LinkButton
            variant="outlined"
            color="secondary"
            to="signup"
            activeProps={{ variant: "contained" }}
          >
            Sign up
          </LinkButton>
        </Stack>
      )}
    </>
  );
};

const Header = (): JSX.Element => {
  const navigate = useNavigate();

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
          <Grid item xs display="flex" alignItems="center">
            <SvgIcon
              url="https://zyae.net/assets/images/brand/zyae/zyae_logo_color.svg"
              size={28}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
          </Grid>
          <Grid item xs={"auto"}>
            <Stack direction="row" justifyContent="center" spacing={1}>
              <Button variant="translucent">About</Button>
              <Button>Projects</Button>
              <Button>Github</Button>
              <Button>Contact</Button>
            </Stack>
          </Grid>
          <Grid item xs>
            <AccountControls />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default {
  Header,
};
