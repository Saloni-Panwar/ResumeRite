// import { useState } from "react";
// import {
//   Box,
//   MenuItem,
//   IconButton,
//   Button,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
// import { Close, Menu, DarkMode, LightMode } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setMode } from "../store";
// import logo from "../assets/LOGO.png";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
//   const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const primaryMain = theme.palette.primary.main;
//   const background = theme.palette.background.default;

//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token"); // Clear token from localStorage
//     navigate("/login"); // Navigate back to login page
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       p="1rem"
//       position="sticky"
//       top="0"
//       zIndex="1000"
//       backgroundColor="#2C3E50"
//     >
//       {/* Logo Section */}
//       <Box display="flex" alignItems="center" onClick={() => navigate("/")}>
//         <img src={logo} alt="ResumeRite Logo" width="170" height="40" />
//       </Box>

//       {/* Desktop Menu */}
//       {isNonMobileScreens ? (
//         <Box display="flex" alignItems="center" gap="2rem">
//           <MenuItem onClick={() => navigate("/")} sx={{ color: primaryMain }}>
//             Resume Templates
//           </MenuItem>
//           <MenuItem onClick={() => navigate("/myResume")} sx={{ color: primaryMain }}>
//             My Resume
//           </MenuItem>
//           <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
//             About Us
//           </MenuItem>
//           {token ? (
//             <Button
//               variant="outlined"
//               onClick={handleLogout}
//               sx={{
//                 borderColor: "white",
//                 color: "white",
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.1)",
//                 },
//               }}
//             >
//               Logout
//             </Button>
//           ) : (
//             <Button
//               variant="outlined"
//               onClick={() => navigate("/login")}
//               sx={{
//                 borderColor: "white",
//                 color: "white",
//                 "&:hover": {
//                   backgroundColor: "rgba(255, 255, 255, 0.1)",
//                 },
//               }}
//             >
//               Login
//             </Button>
//           )}
//           <IconButton onClick={() => dispatch(setMode())}>
//             {theme.palette.mode === "dark" ? (
//               <DarkMode sx={{ fontSize: "25px", color: "#fff" }} />
//             ) : (
//               <LightMode sx={{ fontSize: "25px", color: "white" }} />
//             )}
//           </IconButton>
//         </Box>
//       ) : (
//         <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
//           <Menu sx={{ color: "#fff" }} />
//         </IconButton>
//       )}

//       {/* Mobile Menu */}
//       {!isNonMobileScreens && isMobileMenuToggled && (
//         <Box
//           position="fixed"
//           right="0"
//           top="0"
//           height="100%"
//           zIndex="20"
//           width="300px"
//           backgroundColor={background}
//           display="flex"
//           flexDirection="column"
//           p="1rem"
//         >
//           {/* Close Icon */}
//           <Box display="flex" justifyContent="flex-end">
//             <IconButton onClick={() => setIsMobileMenuToggled(false)}>
//               <Close />
//             </IconButton>
//           </Box>

//           {/* Mobile Menu Items */}
//           <MenuItem onClick={() => navigate("/")} sx={{ color: primaryMain }}>
//             Resume Templates
//           </MenuItem>
//           <MenuItem onClick={() => navigate("/myResume")} sx={{ color: primaryMain }}>
//             My Resume
//           </MenuItem>
//           <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
//             About Us
//           </MenuItem>
//           {token ? (
//             <Button variant="outlined" color="primarymain" onClick={handleLogout} >
//               Logout
//             </Button>
//           ) : (
//             <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
//               Login
//             </Button>
//           )}
//           <IconButton onClick={() => dispatch(setMode())}>
//             {theme.palette.mode === "dark" ? (
//               <DarkMode sx={{ fontSize: "25px" }} />
//             ) : (
//               <LightMode sx={{ fontSize: "25px", color: "white" }} />
//             )}
//           </IconButton>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default Navbar;




import { useState } from "react";
import {
  Box,
  MenuItem,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
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
  const primaryMain = theme.palette.primary.main;
  const background = theme.palette.background.default;

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from localStorage
    navigate("/login"); // Navigate back to login page
  };

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
          <MenuItem onClick={() => navigate("/savedResumes")} sx={{ color: primaryMain }}>
            Saved Resumes
          </MenuItem>
          <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
            About Us
          </MenuItem>
          {token ? (
            <Button
              variant="outlined"
              onClick={handleLogout}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={() => navigate("/login")}
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Login
            </Button>
          )}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px", color: "#fff" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px", color: "white" }} />
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
          <MenuItem onClick={() => navigate("/savedResumes")} sx={{ color: primaryMain }}>
            Saved Resumes
          </MenuItem>
          <MenuItem onClick={() => navigate("/aboutUs")} sx={{ color: primaryMain }}>
            About Us
          </MenuItem>
          {token ? (
            <Button variant="outlined" color="primarymain" onClick={handleLogout} >
              Logout
            </Button>
          ) : (
            <Button variant="outlined" color="primary" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ fontSize: "25px", color: "white" }} />
            )}
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
