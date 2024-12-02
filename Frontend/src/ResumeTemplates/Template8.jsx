import {
    Box,
    Typography,
    Divider,
    Grid,
    List,
    ListItem,
    ListItemText,
  } from "@mui/material";
  import { useSelector } from "react-redux";
  import { useRef } from "react";
  
  export const Template8 = () => {
    const primaryColor = "#ffffff"; // White for text in sidebar
    const secondaryColor = "#1E1E1E"; // Dark background for sidebar
    const backgroundColor = "#F9F9F9"; // Light background for main content
    const ref = useRef(null);
  
    const personalDetails = useSelector((state) => state.personalInfo);
    const workExperiences = useSelector((state) => state.workExperiences);
    const education = useSelector((state) => state.education);
    const skills = useSelector((state) => state.keySkills);
  
    return (
      <Box
        ref={ref}
        display="flex"
        width="100%"
        backgroundColor={backgroundColor}
        id="pdf-content"
      >
        {/* SIDEBAR */}
        <Box
          width="30%"
          backgroundColor={secondaryColor}
          color={primaryColor}
          padding="2rem"
        >
          
  
          {/* Contact */}
          <Box mb="2rem">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <Typography>Email: {personalDetails.email}</Typography>
            <Typography>Phone: {personalDetails.contactNo}</Typography>
            <Typography>Address: {personalDetails.address}, {personalDetails.city}</Typography>
          </Box>
  
          {/* Skills */}
          <Box mb="2rem">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Skills
            </Typography>
            <List>
              {skills.Skill.map((skill, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
  
        {/* MAIN CONTENT */}
        <Box width="70%" padding="2rem">
          {/* Header */}
          <Box mb="2rem">
            <Typography
              variant="h3"
              fontWeight="bold"
              color={secondaryColor}
            >
              {personalDetails.firstName} {personalDetails.lastName}
            </Typography>
            <Typography variant="h5" color="gray">
              {personalDetails.specialization}
            </Typography>
          </Box>
  
          <Divider />
  
          {/* Objective */}
          <Box my="2rem">
            <Typography variant="h5" fontWeight="bold" color={secondaryColor}>
              About Me
            </Typography>
            <Typography>{personalDetails.objective}</Typography>
          </Box>
  
          <Divider />
  
          {/* Work Experience */}
          <Box my="2rem">
            <Typography variant="h5" fontWeight="bold" color={secondaryColor} gutterBottom>
              Work Experience
            </Typography>
            {workExperiences.jobTitle.map((title, index) => (
              <Box key={index} my="1rem">
                <Typography variant="h6" fontWeight="bold">
                  {title} at {workExperiences.orgName[index]}
                </Typography>
                <Typography color="gray">
                  {workExperiences.StartYear[index]} - {workExperiences.endYear[index]}
                </Typography>
                <Typography>{workExperiences.description[index]}</Typography>
              </Box>
            ))}
          </Box>
  
          <Divider />
  
          {/* Education */}
          <Box my="2rem">
            <Typography variant="h5" fontWeight="bold" color={secondaryColor} gutterBottom>
              Education
            </Typography>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                {education.educationType}
              </Typography>
              <Typography color="gray">
                {education.college}, {education.university} ({education.startYear} - {education.endYear})
              </Typography>
              <Typography>{education.description}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Template8;
  