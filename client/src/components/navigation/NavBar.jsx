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
  Avatar,
  Tabs,
  Tab,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// global variables

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const NavBar = () => {
  // variables for NavBar functionality
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = React.useState("one");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // styles variables
  const navBarStyles = {
    bgcolor: "#482880",
    boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.4)",
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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
            >
              <Tab value="one" label="Home" component={Link} to="/" />
              <Tab
                value="two"
                label="Meet the team"
                component={Link}
                to="/meetTheTeam"
              />
              <Tab
                value="three"
                label="Our Services"
                component={Link}
                to="/services"
              />
              <Tab
                value="four"
                label="Contact Us"
                component={Link}
                to="/contact"
              />
            </Tabs>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
