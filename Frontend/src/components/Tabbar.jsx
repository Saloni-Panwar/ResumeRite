
import React, { useState } from "react";
import { Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
import PersonalDetails from "../forms/PersonalDetails";
import Experience from "../forms/Experience";
import Education from "../forms/Education";
import Skills from "../forms/Skills";

const VerticalTabs = ({ setOnFormSubmit }) => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const lightGray = theme.palette.neutral.light;
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  // Navigation functions
  const handleNext = () => {
    setActiveTab((prevTab) => Math.min(prevTab + 1, 3));
  };

  const handlePrevious = () => {
    setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobileScreen ? "column" : "row"}
      justifyContent="space-between"
      gap={isMobileScreen ? "1rem" : "4rem"}
    >
      <Box
        width={isMobileScreen ? "100%" : "20%"}
        minWidth="250px"
        backgroundColor={theme.palette.background.alt}
      >
        <Tabs
          orientation={isMobileScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={activeTab}
          sx={{
            borderRadius: "5px",
          }}
        >
          <Tab
            sx={{ borderBottom: `1px solid ${lightGray}` }}
            label="Personal Info"
          />
          <Tab
            sx={{ borderBottom: `1px solid ${lightGray}` }}
            label="Education"
          />
          <Tab
            sx={{ borderBottom: `1px solid ${lightGray}` }}
            label="Work Experience"
          />
          <Tab
            sx={{ borderBottom: `1px solid ${lightGray}` }}
            label="Skills"
          />
        </Tabs>
      </Box>

      {/* Form rendering section */}
      <Box width="100%">
        {activeTab === 0 && <PersonalDetails onNext={handleNext} />}
        {activeTab === 1 && (
          <Education onNext={handleNext} onPrevious={handlePrevious} />
        )}
        {activeTab === 2 && (
          <Experience onNext={handleNext} onPrevious={handlePrevious} />
        )}
        {activeTab === 3 && (
          <Skills
            onPrevious={handlePrevious}
            setOnFormSubmit={setOnFormSubmit}
          />
        )}
      </Box>
    </Box>
  );
};

export default VerticalTabs;

