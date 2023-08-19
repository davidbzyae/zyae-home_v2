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
import { useAppSelector, usePopover } from "@/hooks";

import { deleteSession } from "@/features/auth";
import { useNavigate } from "react-router-dom";

const AccountControls = (): JSX.Element => {
  const user = useAppSelector((state) => state.user);

  const profilePopover = usePopover();
  const notificationsPopover = usePopover();

  const handleLogOut = async () => {
    await deleteSession();
    document.location.href = "/login";
  };

  return (
    <>
      {user ? (
        <>
          <Button
            variant={profilePopover.isOpen ? "translucent" : "text"}
            sx={{ pl: 0.5, pr: 1.25, ml: "auto" }}
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
            />
          </Button>
          <profilePopover.Element {...profilePopover.elementProps}>
            <MenuList>
              <MenuItem onClick={(e) => notificationsPopover.open(e)}>
                <ListItemIcon>
                  <FlaticonIcon icon="fi fi-rr-bell" />
                </ListItemIcon>
                Notifications
              </MenuItem>
              <MenuItem onClick={handleLogOut} color="error">
                <ListItemIcon>
                  <FlaticonIcon icon="fi fi-rr-exit" />
                </ListItemIcon>
                Log out
              </MenuItem>
            </MenuList>
          </profilePopover.Element>
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
        </>
      ) : (
        <Stack direction="row" justifyContent={"right"} spacing={1}>
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
          <Grid item xs>
            <IconButton>
              <FlaticonIcon icon="fi fi-rr-bars-sort" />
            </IconButton>
          </Grid>
          <Grid item display="flex" alignItems="center">
            <SvgIcon
              url="https://zyae.net/assets/images/brand/zyae/zyae_logo_color.svg"
              size={28}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            />
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
