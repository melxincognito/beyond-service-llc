// page functionality imports
import * as React from "react";
import { Link } from "react-router-dom";

// MUI imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Tabs,
  Tab,
  MenuItem,
  Paper,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// global variables

const NavBar = () => {
  // variables for NavBar functionality
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const [value, setValue] = React.useState(1);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // social link external page routes
  function facebookPageClick() {
    window.open("https://www.facebook.com/", "_blank");
  }

  function twitterPageClick() {
    window.open("https://www.twitter.com/", "_blank");
  }

  function youtubePageClick() {
    window.open("https://www.youtube.com/", "_blank");
  }

  function linkedInPageClick() {
    window.open(
      "https://www.linkedin.com/in/rodriguezjonathon/#experience",
      "_blank"
    );
  }

  // styles variables
  const navBarStyles = {
    bgcolor: "#482880",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    padding: 2,
  };

  const tabsContainerStyles = {
    flexGrow: 1,
    alignContent: "center",
    justifyContent: "center",
    display: { xs: "none", md: "flex" },
  };

  const tabsStyles = {
    bgcolor: "rgba(255, 255, 255, 0.35)",
    borderRadius: 5,
    pt: 1.3,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  return (
    <AppBar position="fixed" sx={navBarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Beyond Service LLC
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem component={Link} to="/">
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/meetTheTeam">
                <Typography textAlign="center">Meet the team</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/services">
                <Typography textAlign="center">Services</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/projectGallery">
                <Typography textAlign="center">Project Gallery</Typography>
              </MenuItem>
              <MenuItem component={Link} to="/contact">
                <Typography textAlign="center">Contact Us</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Beyond Service
          </Typography>
          <Box sx={tabsContainerStyles}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value={1} label="Home" component={Link} to="/" />
              <Tab
                value={2}
                label="Meet the team"
                component={Link}
                to="/meetTheTeam"
              />
              <Tab
                value={3}
                label="Our Services"
                component={Link}
                to="/services"
              />
              <Tab
                value={4}
                label="Project Gallery"
                component={Link}
                to="/projectGallery"
              />
              <Tab
                value={5}
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              bgcolor: "#331c59",
              padding: 2,
              borderRadius: 5,
            }}
          >
            <div>
              <FacebookIcon fontSize="large" onClick={facebookPageClick} />
              <TwitterIcon fontSize="large" onClick={twitterPageClick} />

              <LinkedInIcon fontSize="large" onClick={linkedInPageClick} />
              <YouTubeIcon fontSize="large" onClick={youtubePageClick} />
            </div>
            <hr size="1" width="95%" color="white" />
            <div>
              <Paper
                sx={{
                  bgcolor: "#1d1032",
                  color: "white",
                  padding: "0 6px",
                }}
              >
                <Typography variant="overline">
                  <LocalPhoneIcon fontSize="xxsmall" /> Call us at (480)000-0000
                </Typography>
              </Paper>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
