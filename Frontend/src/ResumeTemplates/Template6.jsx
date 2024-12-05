import {
    Box,
    Typography,
    Divider,
    // useTheme,
    Grid,
  } from "@mui/material";
  import { useSelector } from "react-redux";
  import { useRef } from "react";
  
  export const Template6 = () => {
    // const theme = useTheme();
    const primaryColor = "#87CEEB";  // Sky blue for primary elements
    const secondaryColor = "#00BFFF"; // Deep sky blue for secondary elements
    const ref = useRef(null);
  
    const personalDetails = useSelector((state) => state.personalInfo);
    const workExperiences = useSelector((state) => state.workExperiences);
    const education = useSelector((state) => state.education);
    const skills = useSelector((state) => state.keySkills);
  
    return (
      <Box
        ref={ref}
        width="100%"
        padding="2rem"
        backgroundColor="#f0f8ff" // Light sky blue background
        id="pdf-content"
      >
        {/* HEADER */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          paddingBottom="1.5rem"
        >
          <Box>
            <Typography variant="h3" color={primaryColor} fontWeight="bold">
              {personalDetails.firstName} {personalDetails.lastName}
            </Typography>
            <Typography variant="h6" color={secondaryColor}>
              {personalDetails.specialization}
            </Typography>
          </Box>
          <Box textAlign="right">
            <Typography color={primaryColor}>
              Email: {personalDetails.email}
            </Typography>
            <Typography color={primaryColor}>
              Contact No: {personalDetails.contactNo}
            </Typography>
            <Typography color={primaryColor}>
              Address: {personalDetails.address}, {personalDetails.city}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: secondaryColor }} />
  
        {/* OBJECTIVE */}
        <Box marginTop="2rem">
          <Typography variant="h5" color={primaryColor} gutterBottom>
            Objective
          </Typography>
          <Typography color="#333">
            {personalDetails.objective}
          </Typography>
        </Box>
  
        {/* EXPERIENCE */}
        <Box marginTop="2rem">
          <Typography variant="h5" color={primaryColor} gutterBottom>
            Work Experience
          </Typography>
          {workExperiences.jobTitle.map((title, index) => (
            <Box key={index} marginBottom="1rem">
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography variant="h6" color="#333" fontWeight="bold">
                    {title} at {workExperiences.orgName[index]}
                  </Typography>
                </Grid>
                <Grid item xs={4} textAlign="right">
                  <Typography color={secondaryColor}>
                    {workExperiences.StartYear[index]} - {workExperiences.endYear[index]}
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="#666">
                {workExperiences.description[index]}
              </Typography>
            </Box>
          ))}
        </Box>
  
        {/* EDUCATION */}
        <Box marginTop="2rem">
          <Typography variant="h5" color={primaryColor} gutterBottom>
            Education
          </Typography>
          <Box marginBottom="1rem">
            <Typography color="#333" fontWeight="bold">
              {education.educationType} ({education.startYear} - {education.endYear})
            </Typography>
            <Typography color={secondaryColor}>
              {education.college}, {education.university}
            </Typography>
            <Typography color="#666">
              {education.description}
            </Typography>
          </Box>
        </Box>
  
        {/* SKILLS */}
        <Box marginTop="2rem">
          <Typography variant="h5" color={primaryColor} gutterBottom>
            Key Skills
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            gap="1rem"
          >
            {skills.Skill.map((skill, index) => (
              <Box
                key={index}
                padding="0.5rem 1rem"
                borderRadius="1rem"
                backgroundColor={secondaryColor}
                color="#fff"
                fontWeight="bold"
              >
                {skill}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    );
  };
  
  export default Template6;
  