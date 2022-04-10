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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Twitter, LinkedIn, Instagram } from "@mui/icons-material";

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

  // styles variables
  const navBarStyles = {
    bgcolor: "primary",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
    padding: 2,
    color: "white",
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
    borderRadius: 1,
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
  };

  const mobileTabContainerStyles = {
    width: "23rem",
    height: "100%",
    display: "block",
    float: "left",
    bgcolor: "primary.dark",
    color: "secondary.main",
  };

  const mobileTabStyle = {
    display: "block",
    width: "100%",
    padding: "18px 20px",
  };
  const socialLinkStyles = {
    p: 0.5,
  };

  // social link external page routes

  function twitterPageClick() {
    window.open("https://www.twitter.com/", "_blank");
  }

  function facebookPageClick() {
    window.open("https://www.facebook.com/", "_blank");
  }
  function instagramPageClick() {
    window.open("https://www.instagram.com/", "_blank");
  }

  function linkedInPageClick() {
    window.open("https://www.linkedin.com/", "_blank");
  }

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

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
              sx={{}}
            >
              <Container sx={mobileTabContainerStyles}>
                <MenuItem component={Link} to="/" sx={mobileTabStyle}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/aboutUs" sx={mobileTabStyle}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/services" sx={mobileTabStyle}>
                  <Typography textAlign="center">Services</Typography>
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/projectGalleryMobile"
                  sx={mobileTabStyle}
                >
                  <Typography textAlign="center">Project Gallery</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/contact" sx={mobileTabStyle}>
                  <Typography textAlign="center">Contact Us</Typography>
                </MenuItem>
              </Container>
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
                to="/projectGalleryDesktop"
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

          <Box display="grid" sx={{ flexGrow: 0 }}>
            <Box display="flex">
              <Twitter
                sx={socialLinkStyles}
                fontSize="large"
                onClick={twitterPageClick}
              />
              <FacebookIcon
                sx={socialLinkStyles}
                fontSize="large"
                onClick={facebookPageClick}
              />
            </Box>
            <Box>
              <Instagram
                sx={socialLinkStyles}
                fontSize="large"
                onClick={instagramPageClick}
              />
              <LinkedIn
                sx={socialLinkStyles}
                fontSize="large"
                onClick={linkedInPageClick}
              />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
