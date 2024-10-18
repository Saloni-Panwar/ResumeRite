import { Box, Typography, useTheme, List, ListItem } from "@mui/material";
import UserData from "../dummydata";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Template2 = () => {
  const theme = useTheme();
  const main = theme.palette.template2.main;
  const dark = theme.palette.template2.dark;
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
          <Typography color={dark} variant="h4">
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
          <Typography color="#000" variant="subtitle">
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
      <br />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          mb="1rem"
          pb="0.50rem"
        >
          Objective
        </Typography>
        <Typography color="#000">{personalDetails.objective}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          pb="0.25rem"
        >
          Experience
        </Typography>
        <Box mb="0.5rem">
          <List
            sx={{ listStyle: "decimal", paddingLeft: "1.5rem", color: "#000" }}
          >
            {workExperiences.jobTitle.map((title, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography color="#000">
                  <span style={{ fontWeight: "bold" }}>{title}</span> at{" "}
                  {workExperiences.orgName[index]}
                </Typography>
                <Typography color="#000">
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
      <Box m="1rem 0">
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          pb="0.25rem"
        >
          Education
        </Typography>
        <Box mb="0.5rem" p="0.5rem">
          <Typography color="#000" fontWeight="bold">
            {education.educationType} - {education.startYear} to{" "}
            {education.endYear}
          </Typography>
          <Typography color="#000">
            <span style={{ color: "black" }}>{education.college}</span> ,{" "}
            {education.university}
          </Typography>
          <Typography color="#000">{education.description}</Typography>
          {/* <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
            {UserData.educationDetails.map((edu, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography fontWeight="bold">{edu.degreeName}</Typography>
                <Typography color={main}>
                  {edu.collegeName} {edu.startYear} to {edu.endYear}
                </Typography>
                <Typography>{edu.description}</Typography>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Box>
      {/* KEY SKILLS */}
      <Box>
        <Typography
          borderBottom={`2px solid ${main}`}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          pb="0.25rem"
        >
          Skills
        </Typography>
        <List
          sx={{ listStyle: "decimal", paddingLeft: "1.5rem", color: "#000" }}
        >
          {skills.Skill.map((skill, index) => (
            <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
              <Typography color="#000">{skill}</Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Template2;
