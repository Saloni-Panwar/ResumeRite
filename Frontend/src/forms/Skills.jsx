import { useForm } from "react-hook-form";
import { useState } from "react";

import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SkillsBox from "./SkillsBox";
import { useDispatch, useSelector } from "react-redux";
import { setKeySkills } from "../store";

const Skills = ({ onPrevious, setOnFormSubmit }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;

  const [skillField, setSkillField] = useState([0]);
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.keySkills);

  // Function to add a new skill box
  const handleAddMore = () => {
    setSkillField((prevField) => [...prevField, prevField.length]);
  };

  // Function to remove a skill box
  const handleRemoveField = (index) => {
    setSkillField((prevField) => prevField.filter((_, i) => i !== index));
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      Skill: skills.Skill,
    },
  });

  const onSubmit = (data) => {
    dispatch(setKeySkills(data));
    // Call the function from myResume component to render the preview component
    setOnFormSubmit(true);
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
        <Box width="100%" display="flex" flexDirection="column" gap="1rem">
          {skillField.map((index) => (
            <Box key={index} display="flex" alignItems="center" gap="1rem">
              <SkillsBox control={control} index={index} />
              {skillField.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveField(index)}
                  color="error"
                >
                  <RemoveCircleIcon />
                </IconButton>
              )}
            </Box>
          ))}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="0.5rem"
          >
            <Button onClick={handleAddMore} variant="outlined">
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
