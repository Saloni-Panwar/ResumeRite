import { Box, Typography, useTheme, List, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { useRef } from "react";

const Template5 = () => {
  const theme = useTheme();
  const main = theme.palette.template3.main;
  const dark = theme.palette.template3.dark;
  const ref = useRef(null);
  const personalDetails = useSelector((state) => state.personalInfo);
  const workExperiences = useSelector((state) => state.workExperiences);
  const education = useSelector((state) => state.education);
  const skills = useSelector((state) => state.keySkills);

  return (
    <Box
      width="100%"
      padding="1.5rem"
      backgroundColor="#f9f9f9"
      id="pdf-content"
      ref={ref}
    >
      {/* HEADER SECTION */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="2rem"
        borderBottom={`3px solid ${main}`}
        pb="1rem"
      >
        <Typography color={dark} variant="h4" fontWeight="bold">
          {personalDetails.firstName} {personalDetails.lastName}
        </Typography>
        <Typography color="#555" variant="h6">
          {personalDetails.specialization}
        </Typography>
        <Box display="flex" justifyContent="center" gap="2rem" mt="1rem">
          <Typography color={main}>
            <span style={{ color: "black" }}>Email:</span>{" "}
            {personalDetails.email}
          </Typography>
          <Typography color={main}>
            <span style={{ color: "black" }}>Phone:</span>{" "}
            {personalDetails.contactNo}
          </Typography>
        </Box>
        <Typography color={main}>
          <span style={{ color: "black" }}>Address:</span>{" "}
          {personalDetails.address}, {personalDetails.city}
        </Typography>
      </Box>

      {/* OBJECTIVE */}
      <Box mb="2rem">
        <Typography
          borderBottom={`3px solid ${main}`}
          color={dark}
          fontSize="1.75rem"
          mb="1rem"
          pb="0.75rem"
        >
          Objective
        </Typography>
        <Typography color="#333">{personalDetails.objective}</Typography>
      </Box>

      {/* EXPERIENCE */}
      <Box mb="2rem">
        <Typography
          borderBottom={`3px solid ${main}`}
          color={dark}
          fontSize="1.75rem"
          mb="1rem"
          pb="0.75rem"
        >
          Work Experience
        </Typography>
        <Box>
          <List sx={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#000" }}>
            {workExperiences.jobTitle.map((title, index) => (
              <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
                <Typography fontWeight="bold" color="#000">
                  {title} at {workExperiences.orgName[index]}
                </Typography>
                <Typography color="#000">
                  {workExperiences.StartYear[index]} -{" "}
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
      <Box mb="2rem">
        <Typography
          borderBottom={`3px solid ${main}`}
          color={dark}
          fontSize="1.75rem"
          mb="1rem"
          pb="0.75rem"
        >
          Education
        </Typography>
        <Typography fontWeight="bold" color="#000">
          {education.educationType} ({education.startYear} -{" "}
          {education.endYear})
        </Typography>
        <Typography color="#000">
          {education.college}, {education.university}
        </Typography>
        <Typography color="#000">{education.description}</Typography>
      </Box>

      {/* SKILLS */}
      <Box>
        <Typography
          borderBottom={`3px solid ${main}`}
          color={dark}
          fontSize="1.75rem"
          mb="1rem"
          pb="0.75rem"
        >
          Key Skills
        </Typography>
        <List sx={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#000" }}>
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

export default Template5;
