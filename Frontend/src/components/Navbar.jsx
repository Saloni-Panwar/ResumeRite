import { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  MenuItem,
  IconButton,
  Button,
  useTheme,
} from "@mui/material";
import { Close, Menu, DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMode } from "../store";
import logo from "../assets/LOGO.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const theme = useTheme();
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryMain = theme.palette.primary.main;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p="1rem"
      position="sticky"
      top="0"
      zIndex="1000"
      backgroundColor="#2C3E50"
    >
      {/* Logo Section */}
      <Box display="flex" alignItems="center" onClick={() => navigate("/")}>
        <img src={logo} alt="ResumeRite Logo" width="170" height="40" />
      </Box>

      {/* Desktop Menu */}
      {isNonMobileScreens ? (
        <Box display="flex" alignItems="center" gap="2rem">
          <MenuItem onClick={() => navigate("/")} sx={{ color: primaryMain }}>
            Resume Templates
          </MenuItem>
          <MenuItem onClick={() => navigate("/myResume")} sx={{ color: primaryMain }}>
            My Resume
          </MenuItem>
          <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
            About Us
          </MenuItem>
          <Button variant="outlined" color="primary" onClick={() => navigate("/Login")}>
            Login
          </Button>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px", color: "#fff" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px", color: dark }} />
            )}
          </IconButton>
        </Box>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu sx={{ color: "#fff" }} />
        </IconButton>
      )}

      {/* Mobile Menu */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          top="0"
          height="100%"
          zIndex="20"
          width="300px"
          backgroundColor={background}
          display="flex"
          flexDirection="column"
          p="1rem"
        >
          {/* Close Icon */}
          <Box display="flex" justifyContent="flex-end">
            <IconButton onClick={() => setIsMobileMenuToggled(false)}>
              <Close />
            </IconButton>
          </Box>

          {/* Mobile Menu Items */}
          <MenuItem onClick={() => navigate("/")} sx={{ color: primaryMain }}>
            Resume Templates
          </MenuItem>
          <MenuItem onClick={() => navigate("/myResume")} sx={{ color: primaryMain }}>
            My Resume
          </MenuItem>
          <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
            About Us
          </MenuItem>
          <Button variant="outlined" color="primary" onClick={() => navigate("/Login")}>
            Login
          </Button>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px", color: dark }} />
            )}
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
