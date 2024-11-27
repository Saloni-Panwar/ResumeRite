import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import React from 'react';
 import Home from "./scenes/Home ";
import MyResume from "./scenes/MyResume";
import AboutUs from "./scenes/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./Auth/Login";
import SignUpPage from "./Auth/Signup";

// Create a wrapper component for the Footer
const FooterWrapper = () => {
  const location = useLocation();
  const hideFooterPaths = ['/Login', '/signup'];
  
  
  return !hideFooterPaths.includes(location.pathname) ? <Footer /> : null;
};

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myResume" element={<MyResume />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
          <FooterWrapper />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;