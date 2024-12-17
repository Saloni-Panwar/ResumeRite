// import { useForm } from "react-hook-form";
// import { useState } from "react";

// import { Box, Typography, useTheme, Button } from "@mui/material";
// import SkillsBox from "./SkillsBox";
// import { useDispatch, useSelector } from "react-redux";
// import { setKeySkills } from "../store";

// const Skills = ({ onPrevious, setOnFormSubmit }) => {
//   const theme = useTheme();
//   const main = theme.palette.primary.main;

//   const [skillField, setskillField] = useState([0]);
//   const dispatch = useDispatch();
//   const skills = useSelector((state) => state.keySkills);

//   // this function is responsible to add the next set of skill box
//   const handleAddMore = () => {
//     setskillField((prevField) => [...prevField, prevField.length]);
//   };

//   const { control, handleSubmit } = useForm({
//     defaultValues: {
//       Skill: skills.Skill,
//     },
//   });

//   const onSubmit = (data) => {
//     dispatch(setKeySkills(data));
//     //here the function from myResume component is called and will be responsible for rendering the preview component
//     setOnFormSubmit(true);
//   };

//   return (
//     <Box
//       width="100%"
//       maxWidth="550px"
//       p="1rem 4%"
//       backgroundColor={theme.palette.background.alt}
//       borderRadius="8px"
//     >
//       <Typography variant="h4" mb="1rem" color={main}>
//         Key Skills
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Box width="100%" display="flex" flexWrap="wrap">
//           <Box>
//             {skillField.map((index) => (
//               <SkillsBox key={index} control={control} index={index} />
//             ))}
//           </Box>
//           <Box
//             display="flex"
//             justifyContent="center"
//             alignItems="center"
//             mt="0.5rem"
//           >
//             <Button onClick={handleAddMore}>Add More</Button>
//           </Box>
//         </Box>
//         <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
//           <Button size="large" variant="outlined" onClick={onPrevious}>
//             Previous
//           </Button>
//           <Button size="large" variant="contained" type="submit">
//             Submit
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default Skills; 


import { useForm } from "react-hook-form";
import { useState } from "react";
import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/HighlightOff";
import SkillsBox from "./SkillsBox";
import { useDispatch, useSelector } from "react-redux";
import { setKeySkills } from "../store";

const Skills = ({ onPrevious, setOnFormSubmit }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;

  const dispatch = useDispatch();
  const skills = useSelector((state) => state.keySkills);

  // Array to hold skill boxes with unique IDs
  const [skillField, setSkillField] = useState([
    { id: 0 }, // Skill 1 (default and non-deletable)
  ]);

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      Skill: skills.Skill || [],
    },
  });

  // Function to add a new skill box with a unique ID
  const handleAddMore = () => {
    setSkillField((prevFields) => [
      ...prevFields,
      { id: new Date().getTime() }, // Unique ID
    ]);
  };

  // Function to delete a skill box (except the first one)
  const handleDelete = (idToDelete) => {
    setSkillField((prevFields) => prevFields.filter((field) => field.id !== idToDelete));

    // Clear the form values for the deleted skill
    const currentValues = getValues();
    setValue(
      "Skill",
      currentValues.Skill.filter((_, idx) => idx !== skillField.findIndex((f) => f.id === idToDelete))
    );
  };

  const onSubmit = (data) => {
    dispatch(setKeySkills(data));
    setOnFormSubmit(true); // Trigger rendering the preview component
  };

  return (
    <Box
      width="100%"
      maxWidth="550px"
      p="1rem 4%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="8px"
    >
      <Typography variant="h4" mb="1rem" color={main}>
        Key Skills
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width="100%" display="flex" flexDirection="column" gap="0.5rem">
          {skillField.map((field, index) => (
            <Box
              key={field.id}
              display="flex"
              alignItems="center"
              position="relative"
            >
              <SkillsBox control={control} index={index} />
              {/* Delete Icon: Hidden for the first skill */}
              {index > 0 && (
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(field.id)}
                  color="error"
                  style={{ marginLeft: "0.5rem" }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Box display="flex" justifyContent="center" mt="0.5rem">
            <Button variant="outlined" onClick={handleAddMore}>
              Add More
            </Button>
          </Box>
        </Box>

        <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
          <Button size="large" variant="outlined" onClick={onPrevious}>
            Previous
          </Button>
          <Button size="large" variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Skills;
