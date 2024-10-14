import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./scenes/Home ";
import MyResume from "./scenes/MyResume";
import AboutUs from "./scenes/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
          </Routes>
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
