import {
  Box,
  Divider,
  Typography,
  useTheme,
  List,
  ListItem,
} from "@mui/material";
import UserData from "../dummydata";
import { useSelector } from "react-redux";
import { useRef } from "react";

export const Template4 = () => {
  const theme = useTheme();
  const main = theme.palette.template4.main;
  const dark = theme.palette.template4.dark;
  const light = theme.palette.template4.light;
  const light3 = theme.palette.template3.light;
  const ref = useRef(null);

  const personalDetails = useSelector((state) => state.personalInfo);
  const workExperiences = useSelector((state) => state.workExperiences);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.keySkills);
  return (
    <Box
      width="100%"
      padding="1rem"
      backgroundColor="#fff"
      id="pdf-content"
      ref={ref}
    >
      {/* HEADER SECTION */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="1rem"
      >
        <Box width="100%" maxWidth="300px">
          <Typography textTransform="uppercase" color={dark} variant="h4">
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
          <Typography color={main} variant="subtitle">
            {personalDetails.specialization}
          </Typography>
        </Box>
        <Box width="100%" maxWidth="300px">
          <Typography color={main}>
            <span style={{ color: "black" }}>Email:</span>{" "}
            {personalDetails.email}
          </Typography>
          <Typography color={main}>
            <span style={{ color: "black" }}>Contact No:</span>{" "}
            {personalDetails.contactNo}
          </Typography>
          <Typography color={main}>
            <span style={{ color: "black" }}>Address:</span>{" "}
            {personalDetails.address},{personalDetails.city}
          </Typography>
        </Box>
      </Box>
      <Divider color={main} sx={{ height: "10px", borderRadius: "8px" }} />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="2rem"
          m="1rem 0"
        >
          Objective
        </Typography>
        <Typography color="#000">{personalDetails.objective}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="2rem"
        >
          Experience
        </Typography>
        {workExperiences.jobTitle.map((title, index) => (
          <>
            <Box
              key={index}
              m="0.5rem 0"
              display="flex"
              justifyContent="space-between"
              gap="0.5rem"
              alignItems="start"
            >
              <Typography color="#000">
                <span style={{ fontWeight: "bold" }}>{title}</span> at{" "}
                {workExperiences.orgName[index]}
              </Typography>
              <Box>
                <Typography color={light}>
                  {workExperiences.StartYear[index]} to{" "}
                  {workExperiences.endYear[index]}
                </Typography>
              </Box>
            </Box>
            <Typography color="#000">
              {workExperiences.description[index]}
            </Typography>
          </>
        ))}
      </Box>
      {/* EDUCATION */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`1px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="2rem"
        >
          Education
        </Typography>
        <Box mb="0.5rem" p="0.1rem">
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
          lineHeight="2rem"
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
              color={light3}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Template4;
