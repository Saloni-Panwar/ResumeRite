import { useRef } from "react";
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

// const Template1 = React.forwardRef((props, ref) => {
//   const isMobileScreen = useMediaQuery("(max-width:600px)");
//   const personalDetails = useSelector((state) => state.personalInfo);
//   const workExperiences = useSelector((state) => state.workExperiences);
//   const education = useSelector((state) => state.education);
//   const skills = useSelector((state) => state.keySkills);
//   return (
//     <div id="pdf-content" ref={ref}>
//       <Box
//         width="100%"
//         padding="1rem"
//         border="1px solid gray"
//         backgroundColor="#fff"
//       >
//         {/* HEADER SECTION */}
//         <Box
//           display="flex"
//           justifyContent="space-between"
//           flexWrap={isMobileScreen ? "wrap" : "nowrap"}
//           alignItems="center"
//           gap="1rem"
//           mb="1rem"
//         >
//           <Box width="100%" maxWidth="300px">
//             <Typography color={dark} variant="h4">
//               {personalDetails.firstName} {personalDetails.lastName}
//             </Typography>
//             <Typography variant="subtitle">
//               {personalDetails.specialization}
//             </Typography>
//           </Box>
//           <Box width="100%" maxWidth="300px">
//             <Typography color= {main}>
//               <span style={{ color: "black" }}>Email:</span>{" "}
//               {personalDetails.email}
//             </Typography>
//             <Typography color= {main}>
//               <span style={{ color: "black" }}>Contact No:</span>{" "}
//               {personalDetails.contactNo}
//             </Typography>
//             <Typography color= {main}>
//               <span style={{ color: "black" }}>Address:</span>{" "}
//               {personalDetails.address},{personalDetails.city}
//             </Typography>
//           </Box>
//         </Box>
//         <Divider color="" />
//         {/* OBJECTIVE */}
//         <Box m="1rem 0">
//           <Typography
//             backgroundColor= {light}
//             color={dark}
//             fontSize="1.5rem"
//             lineHeight="1.75rem"
//             mb="1rem"
//             p="0.25rem"
//           >
//             Objective
//           </Typography>
//           <Typography>{personalDetails.objective}</Typography>
//         </Box>
//         {/* EXPERIENCE */}
//         <Box>
//           <Typography
//             backgroundColor= {light}
//             color={dark}
//             fontSize="1.5rem"
//             lineHeight="1.75rem"
//             p="0.25rem"
//           >
//             Experience
//           </Typography>
//           <Box mb="0.5rem">
//             <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
//               {workExperiences.jobTitle.map((title, index) => (
//                 <ListItem
//                   key={index}
//                   sx={{ display: "list-item", padding: "0" }}
//                 >
//                   <Typography>
//                     <span style={{ fontWeight: "bold" }}>{title}</span> at{" "}
//                     {workExperiences.orgName[index]}
//                   </Typography>
//                   <Typography color="">
//                     {workExperiences.StartYear[index]} to{" "}
//                     {workExperiences.endYear[index]}
//                   </Typography>
//                 </ListItem>
//               ))}
//             </List>
//           </Box>
//         </Box>
//         {/* EDUCATION */}
//         <Box m="1rem 0">
//           <Typography
//             backgroundColor= {light}
//             color={dark}
//             fontSize="1.5rem"
//             lineHeight="1.75rem"
//             p="0.25rem"
//           >
//             Education
//           </Typography>
//           <Box mb="0.5rem" p="0.5rem">
//             {/* <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
//             {UserData.educationDetails.map((edu, index) => (
//               <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
//                 <Typography fontWeight="bold">{edu.degreeName}</Typography>
//                 <Typography color="">
//                   {edu.collegeName} {edu.startYear} to {edu.endYear}
//                 </Typography>
//                 <Typography>{edu.description}</Typography>
//               </ListItem>
//             ))}
//           </List> */}
//             <Typography fontWeight="bold">
//               {education.educationType} - {education.startYear} to{" "}
//               {education.endYear}
//             </Typography>
//             <Typography color="">
//               <span style={{ color: "black" }}>{education.college}</span> ,{" "}
//               {education.university}
//             </Typography>
//           </Box>
//         </Box>
//         {/* KEY SKILLS */}
//         <Box>
//           <Typography
//             backgroundColor= {light}
//             color={dark}
//             fontSize="1.5rem"
//             lineHeight="1.75rem"
//             p="0.25rem"
//           >
//             Skills
//           </Typography>
//           <List sx={{ listStyle: "decimal", paddingLeft: "1.5rem" }}>
//             {skills.Skill.map((skill, index) => (
//               <ListItem key={index} sx={{ display: "list-item", padding: "0" }}>
//                 {skill}
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Box>
//     </div>
//   );
// });

const Template1 = (props) => {
  const theme = useTheme();
  const ref = useRef(null);
  const main = theme.palette.template1.main;
  const dark = theme.palette.template1.dark;
  const light = theme.palette.template1.light;
  const isMobileScreen = useMediaQuery("(max-width:600px)");
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
        flexWrap="nowrap"
        alignItems="center"
        gap="1rem"
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
      <Divider color="" />
      {/* OBJECTIVE */}
      <Box m="1rem 0">
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          mb="1rem"
          p="0.25rem"
        >
          Objective
        </Typography>
        <Typography color="#000">{personalDetails.objective}</Typography>
      </Box>
      {/* EXPERIENCE */}
      <Box>
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          p="0.25rem"
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
          backgroundColor={light}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          p="0.25rem"
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
        </Box>
      </Box>
      {/* KEY SKILLS */}
      <Box>
        <Typography
          backgroundColor={light}
          color={dark}
          fontSize="1.5rem"
          lineHeight="1.75rem"
          p="0.25rem"
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

export default Template1;
