
import { Box, Typography, useTheme, Link, Grid } from "@mui/material";
import React from "react";
import HandIcon from "@mui/icons-material/ArrowUpwardRounded";
import Img from "../assets/footerim.png";  // Dark mode image

const Footer = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
  sx={{
    backgroundColor: isDarkMode ? "#1b263b" : "#E5E5E5", 
    color: isDarkMode ? theme.palette.text.primary : theme.palette.text.secondary,
    padding: "2rem 0",
    textAlign: "center",
    marginTop: "auto",
    width: "100%",
    overflow: "hidden", 
  }}
>
  <Grid container spacing={4} sx={{ justifyContent: "center", alignItems: "center", padding: "0 2rem" }}>
    {/* Left Section (Image) */}
    <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
      <img
        src={Img}
        alt="Footer Illustration"
        style={{ maxWidth: "100%", borderRadius: "8px" }}
        width="80%"
      />
    </Grid>

    {/* Right Section (Links and Features) */}
    <Grid item xs={12} md={8}>
      {/* Footer Links */}
      <Grid container spacing={6} sx={{ marginBottom: "1rem" }}>
        {["About Us", "Support", "Social"].map((section, index) => (
          <Grid item xs={4} key={index}>
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
              {section}
            </Typography>
            {section === "About Us" && (
              <>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Services</Link>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Vision</Link>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Pricing</Link>
              </>
            )}
            {section === "Support" && (
              <>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Contact</Link>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Refund Policy</Link>
                <Link href="/" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>FAQ's</Link>
              </>
            )}
            {section === "Social" && (
              <>
                <Link href="https://www.instagram.com" target="_blank" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>Instagram</Link>
                <Link href="https://www.linkedin.com" target="_blank" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>LinkedIn</Link>
                <Link href="https://www.youtube.com" target="_blank" sx={{ display: "block", textDecoration: "none", marginBottom: "0.5rem" }}>YouTube</Link>
              </>
            )}
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body2"
        gutterBottom
        sx={{ marginLeft: "-2rem", marginTop: "2rem" }} // Shifted slightly to the left
      >
        - Tailored Resume Templates | - Customizable Designs | - User-Friendly Interface | - Download and Share
      </Typography>

      {/* Follow Us Section */}
      <Box sx={{ margin: "1.5rem 0", marginLeft: "-1rem" }}>
        <Typography variant="body2">
          Follow Us:{" "}
          <Link href="https://www.linkedin.com" target="_blank" sx={{ mx: 1 }}>LinkedIn</Link>
          <Link href="https://www.facebook.com" target="_blank" sx={{ mx: 1 }}>Facebook</Link>
          <Link href="https://www.instagram.com/" target="_blank" sx={{ mx: 1 }}>Instagram</Link>
        </Typography>
      </Box>
    </Grid>
  </Grid>

  {/* Footer Bottom Section */}
  <Box sx={{ marginTop: "-3.5rem", textAlign: "center" }}>
    <Typography variant="body2" sx={{ marginRight: "-27rem" }}>
      © {new Date().getFullYear()} @ResumeRite. All Rights Reserved.
    </Typography>
    <Box sx={{ marginTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "right", marginRight: "2rem" }}>
      <HandIcon sx={{ marginRight: "0.5rem" }} />
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}  
        sx={{ fontSize: "14px", fontWeight: "bold", color: theme.palette.text.primary }}
      >
        Back to Top
      </Link>
    </Box>
  </Box>
</Box>

  );
};

export default Footer;
