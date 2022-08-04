import React, { useState } from "react";
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
  const [anchorElNav, setAnchorElNav] = useState(null);

  const [value, setValue] = useState(1);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const mobileTabsItems = [
    { label: "Home", link: "/", id: 0 },
    { label: "About Us", link: "/aboutUs", id: 1 },
    { label: "Services", link: "/services", id: 2 },
    { label: "Project Gallery", link: "/projectGalleryMobile", id: 3 },
    { label: "Testimonials", link: "/customerTestimonials", id: 4 },
    { label: "Contact Us", link: "/contact", id: 5 },
  ];
  // desktop tabs have a different project gallery and numbering for the tab indicator
  const desktopTabsItems = [
    { label: "Home", link: "/", id: 1 },
    { label: "About Us", link: "/aboutUs", id: 2 },
    { label: "Services", link: "/services", id: 3 },
    { label: "Project Gallery", link: "/projectGalleryDesktop", id: 4 },
    { label: "Testimonials", link: "/customerTestimonials", id: 5 },
    { label: "Contact Us", link: "/contact", id: 6 },
  ];

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
      <Container
        maxWidth="xl"
        sx={{
          p: 2,
          bgcolor: "primary.main",
          display: { xs: "flex", md: "none" },
        }}
      >
        {" "}
      </Container>
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
                {mobileTabsItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    component={Link}
                    to={item.link}
                    sx={mobileTabStyle}
                  >
                    <Typography textAlign="center"> {item.label}</Typography>
                  </MenuItem>
                ))}
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
          {/* tabs for computer screen size without a collapsed view */}
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
              {desktopTabsItems.map((item) => (
                <Tab
                  key={item.id}
                  value={item.id}
                  label={item.label}
                  component={Link}
                  to={item.link}
                />
              ))}
            </Tabs>
          </Box>
          {/* social links */}

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
