import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";

// import hero from "../assets/hero.svg";
import image1 from "../assets/resume.png";
import image2 from "../assets/resume1.png";



import { template1, template2, template3, template4 } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import {
  setTemplate1,
  setTemplate2,
  setTemplate3,
  setTemplate4,
} from "../store";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const theme = useTheme();
  const primaryMain = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //getting the templates status form state

  const istemplate1Selected = useSelector((state) => state.template1);
  const istemplate2Selected = useSelector((state) => state.template2);
  const istemplate3Selected = useSelector((state) => state.template3);
  const istemplate4Selected = useSelector((state) => state.template4);

  //handling the onclick event for ever template

  const handleTemplate1 = () => {
    //here we have to make sure that no template is selected other than template 1

    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }
    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate1());
    navigate("/myResume");
  };
  const handleTemplate2 = () => {
    //here we have to make sure that no template is selected other than template 2

    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }
    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate2());
    navigate("/myResume");
  };
  const handleTemplate3 = () => {
    //here we have to make sure that no template is selected other than template 3

    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }

    if (istemplate4Selected) {
      dispatch(setTemplate4());
    }

    dispatch(setTemplate3());
    navigate("/myResume");
  };
  const handleTemplate4 = () => {
    //here we have to make sure that no template is selected other than template 4

    if (istemplate1Selected) {
      dispatch(setTemplate1());
    }
    if (istemplate2Selected) {
      dispatch(setTemplate2());
    }
    if (istemplate3Selected) {
      dispatch(setTemplate3());
    }

    dispatch(setTemplate4());
    navigate("/myResume");
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
          >
            {/* Crafting Careers, */}
            Stand Out, Get Hired
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
              Craft your future with tailor-made resumes that elevate your job search and transform your career journey
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
          <img
            src={theme.palette.mode === "light" ? image1 : image2}
            width="100%"
            height="auto"
            alt="resume preview"
          />        </Box>
      </Box>
      <Divider />
      {/* TEMPLATE SECTION */}
      <Box mt={isMobileScreen ? "1rem" : "3rem"}>
        <Typography
          fontSize={isMobileScreen ? "18px" : "30px"}
          color={primaryMain}
          mb="2rem"
          textAlign="center"
        >
          Select one of the Template and Build your Resume !
        </Typography>
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          gap="1rem"
          width="100%"
          maxWidth={{
            xs: "100%",
            sm: "fit-content",
            md: "fit-content",
            lg: "fit-content",
          }}
        >
          <Box className="template">
            <img width="100%" src={template1} alt="img" />
            {/* <Template1 /> */}
            <Box className="overlayStyles">
              <Button
                variant="contained"
                color="primary"
                onClick={handleTemplate1}
              >
                Use Template
              </Button>
            </Box>
          </Box>
          <Box className="template">
            <img width="100%" src={template2} alt="img" />
            {/* <Template2 /> */}
            <Box className="overlayStyles">
              <Button
                variant="contained"
                color="primary"
                onClick={handleTemplate2}
              >
                Use Template
              </Button>
            </Box>
          </Box>
          <Box className="template">
            <img width="100%" src={template3} alt="img" />
            {/* <Template3 /> */}
            <Box className="overlayStyles">
              <Button
                variant="contained"
                color="primary"
                onClick={handleTemplate3}
              >
                Use Template
              </Button>
            </Box>
          </Box>
          <Box className="template">
            <img width="100%" src={template4} alt="img" />
            {/* <Template4 /> */}
            <Box className="overlayStyles">
              <Button
                variant="contained"
                color="primary"
                onClick={handleTemplate4}
              >
                Use Template
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
