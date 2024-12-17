// import { useForm } from "react-hook-form";
// import ExperienceBox from "./ExperienceBox";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setWorkExperiences } from "../store";
// import { useSelector } from "react-redux";
// import '../index.css';
// import { Box, Typography, useTheme, Button } from "@mui/material";

// const Experience = ({ onNext, onPrevious }) => {
//   const theme = useTheme();
//   const main = theme.palette.primary.main;
//   const dispatch = useDispatch();
//   // getting the work experience from global state
//   const workExperiences = useSelector((state) => state.workExperiences);
//   const [formBoxes, setFormBoxes] = useState([0]);

//   const { control, handleSubmit, getValues } = useForm({
//     defaultValues: {
//       // these values are form workexperiences in the global state
//       jobTitle: workExperiences.jobTitle,
//       orgName: workExperiences.orgName,
//       StartYear: workExperiences.StartYear,
//       endYear: workExperiences.endYear,
//       description: workExperiences.description,
//     },
//   });

//   // this function is responsible to add the next set of experience box
//   const handleAddMore = () => {
//     setFormBoxes((prevBoxes) => [...prevBoxes, prevBoxes.length]);
//   };

//   const onSubmit = (data) => {
//     dispatch(setWorkExperiences(data));
//     //the onNext function will be called and the function from Tabbar will be executed to move to next form
//     onNext();
//   };

//   return (
//     <Box
//       width="100%"
//       maxWidth="fit-content"
//       p="1rem 4%"
//       backgroundColor={theme.palette.background.alt}
//       borderRadius="8px"
//     >
//       <Typography variant="h4" mb="1rem" color={main}>
//         Work Experiences
//       </Typography>
//       <Box>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box>
//             {/*mapping through all the form boxes and displaying them*/}
//             {formBoxes.map((index) => (
//               <ExperienceBox
//                 key={index}
//                 control={control}
//                 index={index}
//                 getValues={getValues}
//               />
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

//           <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
//             <Button size="large" variant="outlined" onClick={onPrevious}>
//               Previous
//             </Button>

//             <Button className="back-button" size="large" variant="contained" type="submit"
//             >
//               Next
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default Experience;
import { useForm } from "react-hook-form";
import ExperienceBox from "./ExperienceBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWorkExperiences } from "../store";
import "../index.css";
import { Box, Typography, useTheme, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/HighlightOff";

const Experience = ({ onNext, onPrevious }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const dispatch = useDispatch();

  // Getting the work experience from global state
  const workExperiences = useSelector((state) => state.workExperiences);

  // Array to hold Experience Boxes with unique IDs
  const [formBoxes, setFormBoxes] = useState([
    { id: 0 }, // Experience 1 (default, non-deletable)
  ]);

  const { control, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      jobTitle: workExperiences.jobTitle || [],
      orgName: workExperiences.orgName || [],
      StartYear: workExperiences.StartYear || [],
      endYear: workExperiences.endYear || [],
      description: workExperiences.description || [],
    },
  });

  // Function to add a new Experience Box with a unique ID
  const handleAddMore = () => {
    setFormBoxes((prevBoxes) => [
      ...prevBoxes,
      { id: new Date().getTime() }, // Unique ID based on timestamp
    ]);
  };

  // Function to delete an Experience Box (except the default)
  const handleDelete = (idToDelete) => {
    setFormBoxes((prevBoxes) =>
      prevBoxes.filter((box) => box.id !== idToDelete) // Filter out the box by ID
    );

    // Clear the specific form field values for the deleted ID
    const currentValues = getValues();
    Object.keys(currentValues).forEach((field) => {
      if (Array.isArray(currentValues[field])) {
        setValue(
          field,
          currentValues[field].filter((_, idx) => idx !== formBoxes.findIndex((box) => box.id === idToDelete))
        );
      }
    });
  };

  const onSubmit = (data) => {
    dispatch(setWorkExperiences(data));
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
            {/* Mapping through all the Experience Boxes */}
            {formBoxes.map((box, index) => (
              <Box
                key={box.id}
                display="flex"
                alignItems="center"
                position="relative"
              >
                <ExperienceBox
                  control={control}
                  setValue={setValue}
                  getValues={getValues}
                  index={index}
                />
                {/* Delete Icon: Hidden for the first Experience Box */}
                {index > 0 && (
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(box.id)}
                    color="error"
                    style={{ position: "absolute", right: -40, top: "50%" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
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

            <Button
              className="back-button"
              size="large"
              variant="contained"
              type="submit"
            >
              Next
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Experience;
