import { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  MenuItem,
  IconButton,
  useTheme,
} from "@mui/material";
import { Close, Menu, DarkMode, LightMode } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { setMode } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();

  const theme = useTheme();

  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryDark = theme.palette.primary.dark;
  const primaryMain = theme.palette.primary.main;
  const alt = theme.palette.background.alt;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap="2rem"
      p="1rem"
      backgroundColor={alt}
    >
      <Box width="100%">
        <Typography
          onClick={() => navigate("/")}
          color={primaryDark}
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 1.5rem)"
          sx={{
            cursor: "pointer",
          }}
        >
          ResumeRite
        </Typography>
      </Box>

      {/* DESKTOP MENU */}
      {isNonMobileScreens ? (
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          width="100%"
        >
          <MenuItem sx={{ padding: "10px" }}>
            <Typography onClick={() => navigate("/")} color={primaryMain}>
              Resume Templates
            </Typography>
          </MenuItem>
          <MenuItem sx={{ padding: "10px" }}>
            <Typography
              onClick={() => navigate("/myResume")}
              color={primaryMain}
            >
              My Resume
            </Typography>
          </MenuItem>
          <MenuItem sx={{ padding: "10px" }}>
            <Typography
              onClick={() => navigate("/aboutUs")}
              color={primaryMain}
            >
              About Us
            </Typography>
          </MenuItem>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
        </Box>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV  */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>
          {/* MENU-ITEMS */}

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
            <MenuItem sx={{ padding: "10px" }}>
              <Typography onClick={() => navigate("/")} color={primaryMain}>
                Resume Templates
              </Typography>
            </MenuItem>
            <MenuItem sx={{ padding: "10px" }}>
              <Typography
                onClick={() => navigate("/myResume")}
                color={primaryMain}
              >
                My Resume
              </Typography>
            </MenuItem>
            <MenuItem sx={{ padding: "10px" }}>
              <Typography
                onClick={() => navigate("/aboutUs")}
                color={primaryMain}
              >
                About Us
              </Typography>
            </MenuItem>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
