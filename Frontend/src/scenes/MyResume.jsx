// import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
// import Tabbar from "../components/Tabbar";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Preview from "../components/Preview";
// import { useState } from "react";

// const MyResume = () => {
//   const theme = useTheme();
//   const isMobileScreen = useMediaQuery("(max-width:600px)");
//   //getting the templates status form state
//   const istemplate1Selected = useSelector((state) => state.template1);
//   const istemplate2Selected = useSelector((state) => state.template2);
//   const istemplate3Selected = useSelector((state) => state.template3);
//   const istemplate4Selected = useSelector((state) => state.template4);
//   const istemplate5Selected = useSelector((state) => state.template5);
//   const istemplate6Selected = useSelector((state) => state.template6);
//   const istemplate7Selected = useSelector((state) => state.template7);
//   const istemplate8Selected = useSelector((state) => state.template8);


//   const navigate = useNavigate();

//   // useState for final form submission
//   const [onFormSubmit, setOnFormSubmit] = useState(false);

//   const isAnyTemplateSelected = () => {
//     //here we have to check if any template is selected if not so we have to send user to home page
//     if (
//       istemplate1Selected ||
//       istemplate2Selected ||
//       istemplate3Selected ||
//       istemplate4Selected ||
//       istemplate5Selected ||
//       istemplate6Selected ||
//       istemplate7Selected ||
//       istemplate8Selected
 
//     ) {
//       return false;
//     }
//     return true;
//   };

//   const navigateToHome = () => {
//     //this function will responsible to navigate to the home page
//     setTimeout(() => {
//       navigate("/");
//     }, 1000);
//     return (
//       <Box color={theme.palette.background.default}>
//         <Typography fontSize="2rem" color={theme.palette.primary.dark}>
//           Please select a template!!
//         </Typography>
//       </Box>
//     );
//   };

//   const switchComponent = () => {
//     // this function will display the preview component if the form is submitted
//     if (onFormSubmit) {
//       return <Preview setOnFormSubmit={setOnFormSubmit} />;
//     }
//     return <Tabbar setOnFormSubmit={setOnFormSubmit} />;
//   };

//   return (
//     <Box
//       p={isMobileScreen ? "1rem 4%" : "4rem 6%"}
//       sx={{
//         width: "100%",
//         maxWidth: "98%",
//         margin: "0 auto",
//         marginTop: "10px",
//         borderRadius: "8px",
//       }}
//     >
//       <Box width="100%">
//         {isAnyTemplateSelected() ? navigateToHome() : switchComponent()}
//       </Box>
//     </Box>
//   );
// };

// export default MyResume;


import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Tabbar from "../components/Tabbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Preview from "../components/Preview";
import { useState } from "react";

const MyResume = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery("(max-width:600px)");

  // Get template statuses from redux store
  const istemplate1Selected = useSelector((state) => state.template1);
  const istemplate2Selected = useSelector((state) => state.template2);
  const istemplate3Selected = useSelector((state) => state.template3);
  const istemplate4Selected = useSelector((state) => state.template4);
  const istemplate5Selected = useSelector((state) => state.template5);
  const istemplate6Selected = useSelector((state) => state.template6);
  const istemplate7Selected = useSelector((state) => state.template7);
  const istemplate8Selected = useSelector((state) => state.template8);

  const navigate = useNavigate();

  // useState for final form submission
  const [onFormSubmit, setOnFormSubmit] = useState(false);

  // Function to check if any template is selected
  const isAnyTemplateSelected = () => {
    if (
      istemplate1Selected ||
      istemplate2Selected ||
      istemplate3Selected ||
      istemplate4Selected ||
      istemplate5Selected ||
      istemplate6Selected ||
      istemplate7Selected ||
      istemplate8Selected
    ) {
      return false;
    }
    return true;
  };

  // Function to navigate to home page if no template is selected
  const navigateToHome = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    return (
      <Box color={theme.palette.background.default}>
        <Typography fontSize="2rem" color={theme.palette.primary.dark}>
          Please select a template!!
        </Typography>
      </Box>
    );
  };

  // Function to switch between Tabbar and Preview components
  const switchComponent = () => {
    if (onFormSubmit) {
      return <Preview setOnFormSubmit={setOnFormSubmit} />;
    }
    return <Tabbar setOnFormSubmit={setOnFormSubmit} />;
  };

  return (
    <Box
      p={isMobileScreen ? "1rem 4%" : "4rem 6%"}
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      <Box width="100%">
        {isAnyTemplateSelected() ? navigateToHome() : switchComponent()}
      </Box>
    </Box>
  );
};

export default MyResume;
