import { useForm } from "react-hook-form";
import ExperienceBox from "./ExperienceBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setWorkExperiences } from "../store";
import { useSelector } from "react-redux";

import { Box, Typography, useTheme, Button } from "@mui/material";

const Experience = ({ onNext, onPrevious }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const dispatch = useDispatch();
  // getting the work experience from global state
  const workExperiences = useSelector((state) => state.workExperiences);
  const [formBoxes, setFormBoxes] = useState([0]);

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      // these values are form workexperiences in the global state
      jobTitle: workExperiences.jobTitle,
      orgName: workExperiences.orgName,
      StartYear: workExperiences.StartYear,
      endYear: workExperiences.endYear,
      description: workExperiences.description,
    },
  });

  // this function is responsible to add the next set of experience box
  const handleAddMore = () => {
    setFormBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length]);
  };

  const onSubmit = (data) => {
    dispatch(setWorkExperiences(data));
    //the onNext function will be called and the function from Tabbar will be executed to move to next form
    onNext();
  };

  return (
    <Box
      width="100%"
      maxWidth="fit-content"
      p="1rem 4%"
      backgroundColor={theme.palette.background.alt}
      borderRadius="8px"
    >
      <Typography variant="h4" mb="1rem" color={main}>
        Work Experiences
      </Typography>
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            {/*mapping through all the form boxes and displaying them*/}
            {formBoxes.map((index) => (
              <ExperienceBox
                key={index}
                control={control}
                index={index}
                getValues={getValues}
              />
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

          <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
            <Button size="large" variant="outlined" onClick={onPrevious}>
              Previous
            </Button>
            <Button size="large" variant="contained" type="submit">
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Experience;
