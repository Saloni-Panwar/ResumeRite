
// import React, { useState } from "react";
// import { Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
// import PersonalDetails from "../forms/PersonalDetails";
// import Experience from "../forms/Experience";
// import Education from "../forms/Education";
// import Skills from "../forms/Skills";

// const VerticalTabs = ({ setOnFormSubmit }) => {
//   const [activeTab, setActiveTab] = useState(0);
//   const theme = useTheme();
//   const lightGray = theme.palette.neutral.light;
//   const isMobileScreen = useMediaQuery("(max-width:600px)");

//   // Navigation functions
//   const handleNext = () => {
//     setActiveTab((prevTab) => Math.min(prevTab + 1, 3));
//   };

//   const handlePrevious = () => {
//     setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection={isMobileScreen ? "column" : "row"}
//       justifyContent="space-between"
//       gap={isMobileScreen ? "1rem" : "4rem"}
//     >
//       <Box
//         width={isMobileScreen ? "100%" : "20%"}
//         minWidth="250px"
//         backgroundColor={theme.palette.background.alt}
//       >
//         <Tabs
//           orientation={isMobileScreen ? "horizontal" : "vertical"}
//           variant="scrollable"
//           value={activeTab}
//           sx={{
//             borderRadius: "5px",
//           }}
//         >
//           <Tab
//             sx={{ borderBottom: `1px solid ${lightGray}` }}
//             label="Personal Info"
//           />
//           <Tab
//             sx={{ borderBottom: `1px solid ${lightGray}` }}
//             label="Education"
//           />
//           <Tab
//             sx={{ borderBottom: `1px solid ${lightGray}` }}
//             label="Work Experience"
//           />
//           <Tab
//             sx={{ borderBottom: `1px solid ${lightGray}` }}
//             label="Skills"
//           />
//         </Tabs>
//       </Box>

//       {/* Form rendering section */}
//       <Box width="100%">
//         {activeTab === 0 && <PersonalDetails onNext={handleNext} />}
//         {activeTab === 1 && (
//           <Education onNext={handleNext} onPrevious={handlePrevious} />
//         )}
//         {activeTab === 2 && (
//           <Experience onNext={handleNext} onPrevious={handlePrevious} />
//         )}
//         {activeTab === 3 && (
//           <Skills
//             onPrevious={handlePrevious}
//             setOnFormSubmit={setOnFormSubmit}
//           />
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default VerticalTabs;

import React, { useState } from "react";
import { Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
import PersonalDetails from "../forms/PersonalDetails";
import Experience from "../forms/Experience";
import Education from "../forms/Education";
import Skills from "../forms/Skills";
import { motion, AnimatePresence } from "framer-motion";

const VerticalTabs = ({ setOnFormSubmit }) => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const lightGray = theme.palette.neutral.light;
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleNext = () => {
    setActiveTab((prevTab) => Math.min(prevTab + 1, 3));
  };

  const handlePrevious = () => {
    setActiveTab((prevTab) => Math.max(prevTab - 1, 0));
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5 } },
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobileScreen ? "column" : "row"}
      justifyContent="space-between"
      gap={isMobileScreen ? "1rem" : "4rem"}
    >
      {/* Tabs */}
      <Box
        width={isMobileScreen ? "100%" : "20%"}
        minWidth="250px"
        backgroundColor={theme.palette.background.alt}
        borderRadius="5px"
      >
        <Tabs
          orientation={isMobileScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={activeTab}
        >
          <Tab label="Personal Info" sx={{ borderBottom: `1px solid ${lightGray}` }} />
          <Tab label="Education" sx={{ borderBottom: `1px solid ${lightGray}` }} />
          <Tab label="Work Experience" sx={{ borderBottom: `1px solid ${lightGray}` }} />
          <Tab label="Skills" sx={{ borderBottom: `1px solid ${lightGray}` }} />
        </Tabs>
      </Box>

      {/* Animated Content */}
      <Box flex="1">
        <AnimatePresence mode="wait">
          {activeTab === 0 && (
            <motion.div
              key="personal-details"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PersonalDetails onNext={handleNext} />
            </motion.div>
          )}
          {activeTab === 1 && (
            <motion.div
              key="education"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Education onNext={handleNext} onPrevious={handlePrevious} />
            </motion.div>
          )}
          {activeTab === 2 && (
            <motion.div
              key="experience"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Experience onNext={handleNext} onPrevious={handlePrevious} />
            </motion.div>
          )}
          {activeTab === 3 && (
            <motion.div
              key="skills"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Skills onPrevious={handlePrevious} setOnFormSubmit={setOnFormSubmit} />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default VerticalTabs;
