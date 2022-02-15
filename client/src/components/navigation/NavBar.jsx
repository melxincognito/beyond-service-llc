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
  Grid,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";
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
  function googlePageClick() {
    window.open("https://www.google.com/", "_blank");
  }

  // styles variables
  const navBarStyles = {
    bgcolor: "white",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    padding: 2,
    color: "#23143e",
    top: 0,
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
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const socialLinkContainerStyles = {
    flexGrow: 0,

    bgcolor: "rgba(138, 138, 138, 0.38)",
    padding: 2,
    borderRadius: 5,
    marginTop: -4,
  };

  const socialLinksStyles = {
    margin: 0.3,
  };

  const contactPhonePaperStyles = {
    bgcolor: "#23143e",
    color: "white",
    padding: "0 6px",
  };

  return (
    <AppBar position="fixed" sx={navBarStyles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for not collapsed view */}
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
            {/* menu for collapsed view */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
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
              <MenuItem component={Link} to="/aboutUs">
                <Typography textAlign="center">About Us</Typography>
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

          {/* logo for collapsed view */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Beyond Service LLC
          </Typography>
          {/* tabs for computer screen size without a collapsed view </p> */}
          <Box sx={tabsContainerStyles}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              variant="scrollable"
              textColor="secondary"
              indicatorColor="secondary"
              allowScrollButtonsMobile
              scrollButtons
            >
              <Tab value={1} label="Home" component={Link} to="/" />
              <Tab value={2} label="About Us" component={Link} to="/aboutUs" />
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
          {/* social links and contact phone */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
