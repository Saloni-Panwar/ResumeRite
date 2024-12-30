
// import React from "react";
// import {
//   Box,
//   Typography,
//   useTheme,
//   Button,
//   useMediaQuery,
//   Divider,
// } from "@mui/material";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // import image1 from "../assets/resume2.png";
// import image1 from "../assets/im1.png";

// import image2 from "../assets/corousel1.png";
// import image3 from "../assets/corousel2.png";
// import image4 from "../assets/corousel6.png";
// import image5 from "../assets/corousel4.png";
// import image6 from "../assets/corousel5.png";

// import {
//   template1,
//   template2,
//   template3,
//   template4,
//   template5,
//   template6,
//   template7,
//   template8,
// } from "../assets";

// import { useDispatch, useSelector } from "react-redux";
// import {

//   setTemplate1,
//   setTemplate2,
//   setTemplate3,
//   setTemplate4,
//   setTemplate5,
//   setTemplate6,
//   setTemplate7,
//   setTemplate8,
// } from "../store";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const theme = useTheme();
//   const primaryMain = theme.palette.primary.main;
//   const isMobileScreen = useMediaQuery("(max-width:600px)");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const templateActions = [
//     { isSelected: useSelector((state) => state.template1), setAction: setTemplate1 },
//     { isSelected: useSelector((state) => state.template2), setAction: setTemplate2 },
//     { isSelected: useSelector((state) => state.template3), setAction: setTemplate3 },
//     { isSelected: useSelector((state) => state.template4), setAction: setTemplate4 },
//     { isSelected: useSelector((state) => state.template5), setAction: setTemplate5 },
//     { isSelected: useSelector((state) => state.template6), setAction: setTemplate6 },
//     { isSelected: useSelector((state) => state.template7), setAction: setTemplate7 },
//     { isSelected: useSelector((state) => state.template8), setAction: setTemplate8 },
//   ];

//   const handleTemplateSelect = (index) => {
//     templateActions.forEach((action, i) => {
//       if (i !== index && action.isSelected) {
//         dispatch(action.setAction());
//       }
//     });
//     dispatch(templateActions[index].setAction());
//     navigate("/myResume");
//   };

//   const templates = [
//     template1,
//     template2,
//     template3,
//     template4,
//     template5,
//     template6,
//     template7,
//     template8,
//   ];

//   const carouselImages = [image2, image3, image4, image5, image6];

//   const carouselSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: "98%",
//         margin: "0 auto",
//         marginTop: "10px",
//         borderRadius: "8px",
//       }}
//       backgroundColor={theme.palette.background.alt}
//       p={isMobileScreen ? "2rem 4%" : "4rem 8%"}
//     >
//       {/* HERO SECTION */}
//       <Box
//         display="flex"
//         flexDirection={isMobileScreen ? "column-reverse" : "row"}
//         justifyContent="space-between"
//         gap={isMobileScreen ? "0.5rem" : "2rem"}
//         borderRadius="8px"
//         mb="1rem"
//       >
//         <Box width="100%" p={isMobileScreen ? "1rem 1%" : "6rem 2%"}>
//           <Typography
//             color={primaryMain}
//             mb="0.5rem"
//             variant={isMobileScreen ? "h4" : "h3"}
//             fontWeight="bold"
//           >
//             Stand Out, Get Hired
//           </Typography>
//           <Box p="0 0.5rem">
//             <Typography
//               variant={isMobileScreen ? "h6" : "h5"}
//               fontWeight="bold"
//               mb="0.5rem"
//             >
//               Craft Your Future, One Resume at a Time
//             </Typography>
//             <Typography variant={isMobileScreen ? "p" : "h6"}>
//               "Transform your job search with ResumeRite. Our intuitive platform lets you build a resume that highlights your skills and experience in the best light. With personalized templates and easy editing, your next career milestone starts with ResumeRite—where your dream job meets professional presentation."
//             </Typography>
//           </Box>
//         </Box>

//         <Box
//           width="100%"
//           maxWidth="500px"
//           display="flex"
//           justifyContent="center"
//           alignItems="center"
//         >
//           <img src={image1} width="100%" height="60%" alt="resume preview" />
//         </Box>
//       </Box>
//       <Divider />

//       <Box mt="2rem">
//         <Slider {...carouselSettings}>
//           {carouselImages.map((image, index) => (
//             <Box key={index} sx={{ textAlign: "center" }}>
//               <img
//                 src={image}
//                 alt={`carousel ${index + 1}`}
//                 style={{
//                   width: "100%",
//                   height: "300px", // Set a consistent height
//                   objectFit: "contain", // Ensures the image is fully visible
//                   borderRadius: "8px",
//                 }}
//               />
//             </Box>
//           ))}
//         </Slider>
//       </Box>



//       {/* TEMPLATE SECTION */}
//       <Box mt={isMobileScreen ? "1rem" : "3rem"}>
//         <Typography
//           fontSize={isMobileScreen ? "18px" : "30px"}
//           color={primaryMain}
//           mb="2rem"
//           textAlign="center"
//         >
//           Select one of the Templates and Build your Resume!
//         </Typography>
//         <Box
//           display="grid"
//           gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
//           gap="1rem"
//           width="100%"
//         >
//           {[...templates].reverse().map((template, index) => (
//             <Box
//               key={index}
//               className="template"
//               sx={{
//                 position: "relative",
//                 width: "100%",
//                 height: "300px",
//                 border: "1px solid #ddd",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//                 boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//                 transition: "transform 0.3s ease",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                 },
//                 "& img": {
//                   width: "120%",
//                   height: "100%",
//                   objectFit: "fill",
//                 },
//               }}
//             >
//               <img src={template} alt={`template ${templates.length - index}`} />
//               <Box
//                 className="overlayStyles"
//                 sx={{
//                   display: "flex",
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={() => handleTemplateSelect(index)}
//                   sx={{
//                     fontSize: "0.8rem",
//                     padding: "0.8rem 2rem",
//                     borderRadius: "5px",
//                     transition: "background-color 0.3s",
//                     "&:hover": {
//                       backgroundColor: "#2f70a5 ",
//                     },
//                   }}
//                 >
//                   Use Template
//                 </Button>
//               </Box>
//             </Box>
//           ))}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Home;  


/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";
import Slider from "react-slick";
import typed from "react-typed"; // Import Typical for text animation
import { css,keyframes } from "@emotion/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import image1 from "../assets/im1.png";
import image2 from "../assets/c1.png";
import image3 from "../assets/c2.png";
import image4 from "../assets/c3.png";
import image5 from "../assets/c4.png";
import image6 from "../assets/c5.png";

import {
  template1,
  template2,
  template3,
  template4,
  template5,
  template6,
  template7,
  template8,
} from "../assets";

import { useDispatch, useSelector } from "react-redux";
import {
  setTemplate1,
  setTemplate2,
  setTemplate3,
  setTemplate4,
  setTemplate5,
  setTemplate6,
  setTemplate7,
  setTemplate8,
} from "../store";
import { useNavigate } from "react-router-dom";

// Define the animation
const zoomIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const colorChange = keyframes`
  0% {
    color:rgb(97, 247, 255);
  }
  25% {
    color: #6fafff;
  }
  50% {
    color:rgb(92, 143, 184);
  }
  75% {
    color:rgb(78, 102, 240);
  }
  100% {
    color:rgb(116, 79, 217);
  }
`;

const Home = () => {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const templateActions = [
    { isSelected: useSelector((state) => state.template1), setAction: setTemplate1 },
    { isSelected: useSelector((state) => state.template2), setAction: setTemplate2 },
    { isSelected: useSelector((state) => state.template3), setAction: setTemplate3 },
    { isSelected: useSelector((state) => state.template4), setAction: setTemplate4 },
    { isSelected: useSelector((state) => state.template5), setAction: setTemplate5 },
    { isSelected: useSelector((state) => state.template6), setAction: setTemplate6 },
    { isSelected: useSelector((state) => state.template7), setAction: setTemplate7 },
    { isSelected: useSelector((state) => state.template8), setAction: setTemplate8 },
  ];

  const handleTemplateSelect = (index) => {
    templateActions.forEach((action, i) => {
      if (i !== index && action.isSelected) {
        dispatch(action.setAction());
      }
    });
    dispatch(templateActions[index].setAction());
    navigate("/myResume");
  };


  const templates = [
    template1,
    template2,
    template3,
    template4,
    template5,
    template6,
    template7,
    template8,
  ];

  const carouselImages = [image2, image3, image4, image5, image6];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
      backgroundColor={theme.palette.background.alt}
      p={isMobileScreen ? "2rem 4%" : "4rem 8%"}
    >
      {/* HERO SECTION */}
      <Box
        display="flex"
        flexDirection={isMobileScreen ? "column-reverse" : "row"}
        justifyContent="space-between"
        gap={isMobileScreen ? "0.5rem" : "2rem"}
        borderRadius="8px"
        mb="1rem"
      >
        <Box width="100%" p={isMobileScreen ? "1rem 1%" : "6rem 2%"}>
          <Typography
            color={primaryMain}
            mb="0.5rem"
            variant={isMobileScreen ? "h4" : "h3"}
            fontWeight="bold"
          >
            <typed
              steps={["Stand", 1000, "Stand Out", 1000, "Stand Out, Get", 1000, "Stand Out, Get Hired", 2000]}
              loop={Infinity}
              wrapper="span"
            />
          </Typography>
          <Box p="0 0.5rem">
            <Typography
              variant={isMobileScreen ? "h6" : "h5"}
              fontWeight="bold"
              mb="0.5rem"
            >
              Craft Your Future, One Resume at a Time
            </Typography>
            <Typography variant={isMobileScreen ? "p" : "h6"}>
              "Transform your job search with ResumeRite. Our intuitive platform lets you build a resume that highlights your skills and experience in the best light. With personalized templates and easy editing, your next career milestone starts with ResumeRite—where your dream job meets professional presentation."
            </Typography>
          </Box>
        </Box>

        <Box
          width="100%"
          maxWidth="500px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <img src={image1} width="100%" height="60%" alt="resume preview" />
        </Box>
      </Box>
      <Divider />

      {/* CAROUSEL WITH ANIMATION */}
      <Box mt="2rem">
        <Slider {...carouselSettings}>
          {carouselImages.map((image, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                animation: `${zoomIn} 0.6s ease-in-out both`,
              }}
            >
              <img
                src={image}
                alt={`carousel ${index + 1}`}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "contain",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
          ))}
        </Slider>
      </Box>

      {/* TEMPLATE SECTION */}
      <Box mt={isMobileScreen ? "1rem" : "3rem"}>
  <Typography
    fontSize={isMobileScreen ? "18px" : "30px"}
    fontWeight="bold"
    css={css`
      animation: ${colorChange} 5s infinite;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    `}
    mb="2rem"
    textAlign="center"
  >
    Select one of the Templates and Build your Resume!
  </Typography>
  <Box
    display="grid"
    gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
    gap="1rem"
    width="100%"
  >
    {/* Template grid code */}
</Box>;
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap="1rem"
          width="100%"
        >
           {templates.map((template, index) => (
            <Box
              key={index}
              className="template"
              sx={{
                position: "relative",
                width: "100%",
                height: "300px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow to cards
                transition: "transform 0.3s ease", // Smooth transition
                "&:hover": {
                  transform: "scale(1.05)", // Slightly zoom in on hover
                },
                "& img": {
                  width: "120%",
                  height: "100%",
                  objectFit: "fill", // To maintain the aspect ratio properly
                },
              }}
            >
              <img src={template} alt={`template ${index + 1}`} />
              <Box
                className="overlayStyles"
                sx={{
                  display: "flex",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleTemplateSelect(index)}
                  sx={{
                    fontSize: "0.8rem",
                    padding: "0.8rem 2rem",
                    borderRadius: "5px",
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#2f70a5 ",
                    },
                  }}
                >
                  Use Template
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
