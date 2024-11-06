// import { Box, Typography, useTheme } from "@mui/material";

// const Footer = () => {
//   const theme = useTheme();
//   const main = theme.palette.primary.main;
//   return (
//     <footer>
//       <Box
//         backgroundColor={theme.palette.background.alt}
//         width="100%"
//         maxWidth="98%"
//         display="flex"
//         justifyContent="center"
//         alignItems="center"
//         p="1rem"
//         m="0.5rem auto"
//         borderRadius="8px"
//       >
//         <Typography variant="p" color={main} textAlign="center">
//           <span color="#000">All Rights Reserved ©</span> ResumeRite
//         </Typography>
//       </Box>
//     </footer>
//   );
// };

import { Box, Typography, useTheme, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isDarkMode = theme.palette.mode === "dark"; // Check if dark mode is active

  return (
    <Box
      sx={{
        backgroundColor: isDarkMode ? theme.palette.background.default : "#f8f8f8",
        color: isDarkMode ? theme.palette.neutral.main : "inherit", // Change text color in dark mode
        padding: "2rem 0",
        textAlign: "center",
        marginTop: "auto", // Ensures it stays at the bottom
      }}
    >
      <Typography variant="h6" gutterBottom>
        ResumeRite
      </Typography>
      <Typography variant="body2" gutterBottom>
        Craft your future with tailor-made resumes that elevate your job search.
      </Typography>

      <Box sx={{ margin: "1rem 0" }}>
        <Link href="/" sx={{ mx: 1, }}>
          Home
        </Link>
        <Link href="/" sx={{ mx: 1,  }}>
          Resume Templates
        </Link>
        <Link href="/myResume" sx={{ mx: 1, }}>
          My Resume
        </Link>
        <Link href="/aboutUs" sx={{ mx: 1, }}>
          About Us
        </Link>
        <Link href="/login" sx={{ mx: 1, }}>
          Login
        </Link>
      </Box>

      <Typography variant="body2" gutterBottom>
        Features:
      </Typography>
      <Typography variant="body2" gutterBottom>
        - Tailored Resume Templates |
        - Customizable Designs |
        - User-Friendly Interface |
        - Download and Share |
        - Expert Tips
      </Typography>

      <Box sx={{ margin: "1rem 0" }}>
        <Typography variant="body2" color={main}>
          Follow Us:{" "}
          <Link href="https://www.linkedin.com" target="_blank" sx={{ mx: 1, color: main }}>
            LinkedIn
          </Link>
          <Link href="https://www.facebook.com" target="_blank" sx={{ mx: 1, color: main }}>
            Facebook
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ mx: 1, color: main }}>
            Twitter
          </Link>
        </Typography>
      </Box>

      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} ResumeRite. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
