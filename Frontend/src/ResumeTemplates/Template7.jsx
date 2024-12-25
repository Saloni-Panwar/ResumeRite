import {
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useRef } from "react";

export const Template7 = () => {
  const primaryColor = "#000"; // Black for primary elements
  const backgroundColor = "#fff"; // White background
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
      backgroundColor={backgroundColor} // White background
      id="pdf-content"
    >
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between" // Align left and right sides
        marginBottom="1.5rem"
      >
        <Box>
          <Typography
            variant="h3"
            color={primaryColor} // Use black color for name
            fontWeight="bold"
            sx={{ fontFamily: "Arial, sans-serif" }}
          >
            {personalDetails.firstName} {personalDetails.lastName}
          </Typography>
          <Typography variant="h5" color={primaryColor}> {/* Use black color */}
            {personalDetails.specialization}
          </Typography>
        </Box>

        {/* CONTACT INFO */}
        <Box>
          <Typography color={primaryColor}>
            Email: {personalDetails.email}
          </Typography>
          <Typography color={primaryColor}>
            Phone: {personalDetails.contactNo}
          </Typography>
          <Typography color={primaryColor}>
            Address: {personalDetails.address}, {personalDetails.city}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ backgroundColor: primaryColor, marginBottom: "2rem" }} /> {/* Divider in black */}

      {/* OBJECTIVE */}
      <Box marginBottom="2rem">
        <Typography variant="h5" color={primaryColor} gutterBottom>
          Objective
        </Typography>
        <Typography color={primaryColor}>
          {personalDetails.objective}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: primaryColor, marginBottom: "2rem" }} /> {/* Divider in black */}

      {/* PROFESSIONAL EXPERIENCE */}
      <Box marginBottom="2rem">
        <Typography variant="h5" color={primaryColor} gutterBottom>
          Professional Experience
        </Typography>
        {workExperiences.jobTitle.map((title, index) => (
          <Box key={index} marginBottom="1rem">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Typography variant="h6" color={primaryColor} fontWeight="bold">
                  {title} at {workExperiences.orgName[index]}
                </Typography>
              </Grid>
              <Grid item xs={4} textAlign="right">
                <Typography color={primaryColor}>
                  {workExperiences.StartYear[index]} - {workExperiences.endYear[index]}
                </Typography>
              </Grid>
            </Grid>
            <Typography color={primaryColor}>
              {workExperiences.description[index]}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ backgroundColor: primaryColor, marginBottom: "2rem" }} /> {/* Divider in black */}

      {/* EDUCATION */}
      <Box marginBottom="2rem">
        <Typography variant="h5" color={primaryColor} gutterBottom>
          Education
        </Typography>

        {education.educationType === "Post Graduate" || education.educationType === "Graduate" || education.educationType === "Under Graduate" ? (
          <Box marginBottom="1rem">
            <Typography color={primaryColor} fontWeight="bold">
              {education.degree} ({education.startYear} - {education.endYear})
            </Typography>
            <Typography color={primaryColor}>
              {education.college}, {education.university}
            </Typography>
          </Box>
        ) : education.educationType === "Higher Secondary-12th" ? (
          <Box marginBottom="1rem">
            <Typography color={primaryColor} fontWeight="bold">
              Higher Secondary - {education.stream || "N/A"} ({education.yearOfCompletion})
            </Typography>
            <Typography color={primaryColor}>{education.school}</Typography>
          </Box>
        ) : education.educationType === "Secondary-10th" ? (
          <Box marginBottom="1rem">
            <Typography color={primaryColor} fontWeight="bold">
              Secondary School ({education.yearOfCompletion})
            </Typography>
            <Typography color={primaryColor}>{education.school}</Typography>
          </Box>
        ) : null}
      </Box>
      <Divider sx={{ backgroundColor: primaryColor, marginBottom: "2rem" }} /> {/* Divider in black */}

      {/* SKILLS */}
      <Box marginBottom="2rem">
        <Typography variant="h5" color={primaryColor} gutterBottom>
          Key Skills
        </Typography>
        <Box display="flex" flexWrap="wrap" gap="1rem">
          {skills.Skill.map((skill, index) => (
            <Box
              key={index}
              padding="0.5rem 1rem"
              borderRadius="1rem"
              backgroundColor={primaryColor} // Background in black
              color={backgroundColor} // Text color white
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

export default Template7;
