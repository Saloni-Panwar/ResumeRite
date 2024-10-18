import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import UserData from "../dummydata";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Template3 = () => {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const main = theme.palette.template3.main;
  const dark = theme.palette.template3.dark;
  const light = theme.palette.template3.light;
  const personalDetails = useSelector((state) => state.personalInfo);
  const workExperiences = useSelector((state) => state.workExperiences);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.keySkills);
  const ref = useRef(null);

  return (
    <Box
      width="100%"
      minWidth={isMobileScreen ? "800px" : "auto"}
      backgroundColor="#fff"
      id="pdf-content"
      ref={ref}
    >
      {/* HEADER SECTION */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
        backgroundColor={dark}
        p="1rem"
      >
        <Box width="100%" maxWidth="300px">
          <Typography textTransform="uppercase" color={light} variant="h4">
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
          <Typography color={light} variant="subtitle">
            {personalDetails.specialization}
          </Typography>
        </Box>
        <Box width="100%" maxWidth="300px">
          <Typography color={light}>
            <span style={{ color: "black" }}>Email:</span>{" "}
            {personalDetails.email}
          </Typography>
          <Typography color={light}>
            <span style={{ color: "black" }}>Contact No:</span>{" "}
            {personalDetails.contactNo}
          </Typography>
          <Typography color={light}>
            <span style={{ color: "black" }}>Address:</span>{" "}
            {personalDetails.address},{personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <Divider />
      {/* OBJECTIVE */}
      <Box p="1rem" backgroundColor={dark}>
        <Typography color={light}>{personalDetails.objective}</Typography>
      </Box>
      <Box p="1rem">
        {/* EXPERIENCE */}
        <Box>
          <Typography
            borderBottom={`1px solid ${main}`}
            color={dark}
            fontSize="1.5rem"
            lineHeight="1.75rem"
            pb="0.25rem"
          >
            Experience
          </Typography>
          <Box mb="0.5rem">
            <List
              sx={{
                listStyle: "decimal",
                paddingLeft: "1.5rem",
                color: "#000",
              }}
            >
              {workExperiences.jobTitle.map((title, index) => (
                <ListItem
                  key={index}
                  sx={{ display: "list-item", padding: "0" }}
                >
                  <Typography color="#000">
                    <span style={{ fontWeight: "bold" }}>{title}</span> at{" "}
                    {workExperiences.orgName[index]}
                  </Typography>
                  <Typography color={main}>
                    {workExperiences.StartYear[index]} to{" "}
                    {workExperiences.endYear[index]}
                  </Typography>
                  <Typography color="#000">
                    {workExperiences.description[index]}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        {/* EDUCATION */}
        <Box m="0.5rem 0">
          <Typography
            borderBottom={`1px solid ${main}`}
            color={dark}
            fontSize="1.5rem"
            lineHeight="1.75rem"
            p="0.25rem"
          >
            Education
          </Typography>
          <Box mb="0.5rem" p="0.25rem">
            <Typography color="#000" fontWeight="bold">
              {education.educationType} - {education.startYear} to{" "}
              {education.endYear}
            </Typography>
            <Typography color={main}>
              <span style={{ color: "black" }}>{education.college}</span> ,{" "}
              {education.university}
            </Typography>
            <Typography color="#000">{education.description}</Typography>
          </Box>
        </Box>
        {/* KEY SKILLS */}
        <Box>
          <Typography
            borderBottom={`1px solid ${main}`}
            color={dark}
            fontSize="1.5rem"
            lineHeight="1.75rem"
            pb="0.25rem"
          >
            Skills
          </Typography>
          <Box
            mt="1rem"
            width="100%"
            display="flex"
            justifyContent="start"
            gap="1rem"
            flexWrap="wrap"
          >
            {skills.Skill.map((skill, index) => (
              <Typography
                key={index}
                p="0.50rem"
                borderRadius="0.50rem"
                width="fit-content"
                backgroundColor={dark}
                color={light}
              >
                {skill}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Template3;
