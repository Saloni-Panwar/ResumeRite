import { useForm } from "react-hook-form";
import { useState } from "react";

import { Box, Typography, useTheme, Button } from "@mui/material";
import SkillsBox from "./SkillsBox";
import { useDispatch, useSelector } from "react-redux";
import { setKeySkills } from "../store";

const Skills = ({ onPrevious, setOnFormSubmit }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;

  const [skillField, setskillField] = useState([0]);
  const dispatch = useDispatch();
  const skills = useSelector((state) => state.keySkills);

  // this function is responsible to add the next set of skill box
  const handleAddMore = () => {
    setskillField((prevField) => [...prevField, prevField.length]);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      Skill: skills.Skill,
    },
  });

  const onSubmit = (data) => {
    dispatch(setKeySkills(data));
    //here the function from myResume component is called and will be responsible for rendering the preview component
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
        <Box width="100%" display="flex" flexWrap="wrap">
          <Box>
            {skillField.map((index) => (
              <SkillsBox key={index} control={control} index={index} />
            ))}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt="0.5rem"
          >
            <Button onClick={handleAddMore}>Add More</Button>
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
