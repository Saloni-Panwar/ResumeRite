// import {
//   Box,
//   Typography,
//   useTheme,
//   Button,
//   Select,
//   MenuItem,
//   TextField,
//   useMediaQuery,
//   FormControl,
//   InputLabel,
// } from "@mui/material";
// import { useForm, Controller } from "react-hook-form";
// import { useDispatch } from "react-redux";
// import { setEducation } from "../store";
// import { useSelector } from "react-redux";
// import { useState } from "react";

// const Education = ({ onNext, onPrevious }) => {
//   const theme = useTheme();
//   const main = theme.palette.primary.main;
//   const isMobileScreen = useMediaQuery("(max-width:800px)");
//   const dispatch = useDispatch();

//   const education = useSelector((state) => state.education);
//   const { control, handleSubmit, watch, setValue, getValues } = useForm({
//     defaultValues: {
//       educationType: education.educationType || "",
//       university: education.university || "",
//       college: education.college || "",
//       degree: education.degree || "",
//       startYear: education.startYear || "",
//       duration: education.duration || "",
//       endYear: education.endYear || "",
//       school: education.school || "",
//       yearOfCompletion: education.yearOfCompletion || "",
//       stream: education.stream || "",
//       graduation: education.graduation || "", // Optional graduation field
//     },
//   });

//   const [selectedEducationType, setSelectedEducationType] = useState(education.educationType || "");

//   const handleEducationTypeChange = (value) => {
//     setSelectedEducationType(value);
//     // Reset dependent fields when education type changes
//     setValue("university", "");
//     setValue("college", "");
//     setValue("degree", "");
//     setValue("startYear", "");
//     setValue("duration", "");
//     setValue("endYear", "");
//     setValue("school", "");
//     setValue("yearOfCompletion", "");
//     setValue("stream", "");
//     setValue("graduation", "");
//   };

//   const calculateEndYear = () => {
//     const startYear = parseInt(getValues("startYear"));
//     const duration = parseInt(getValues("duration"));
//     if (startYear && duration) {
//       setValue("endYear", startYear + duration);
//     }
//   };

//   const onSubmit = (data) => {
//     dispatch(setEducation(data));
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
//         Education
//       </Typography>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <FormControl fullWidth margin="normal">
//           <InputLabel id="educationType">Education Type</InputLabel>
//           <Controller
//             name="educationType"
//             control={control}
//             rules={{ required: "Required" }}
//             render={({ field }) => (
//               <Select
//                 {...field}
//                 label="Education Type"
//                 onChange={(e) => {
//                   field.onChange(e);
//                   handleEducationTypeChange(e.target.value);
//                 }}
//               >
//                 <MenuItem value="Post Graduate">Post Graduate</MenuItem>
//                 <MenuItem value="Graduate">Graduate</MenuItem>
//                 <MenuItem value="Under Graduate">Under Graduate</MenuItem>
//                 <MenuItem value="Higher Secondary-12th">Higher Secondary-12th</MenuItem>
//                 <MenuItem value="Secondary-10th">Secondary-10th</MenuItem>
//               </Select>
//             )}
//           />
//         </FormControl>

//         {(selectedEducationType === "Post Graduate" ||
//           selectedEducationType === "Graduate" ||
//           selectedEducationType === "Under Graduate") && (
//           <>
//             <Controller
//               name="university"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="University"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="college"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Institute/College"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="degree"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Degree"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="startYear"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Start Year"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   onChange={(e) => {
//                     field.onChange(e);
//                     calculateEndYear();
//                   }}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="duration"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Course Duration (years)"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   onChange={(e) => {
//                     field.onChange(e);
//                     calculateEndYear();
//                   }}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="endYear"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="End Year"
//                   margin="normal"
//                   fullWidth
//                   disabled
//                 />
//               )}
//             />
//             {selectedEducationType === "Post Graduate" && (
//               <>
//                 <Box mt="1rem">
//                   <Typography variant="h6" color="textSecondary">
//                     Graduation Details (Optional)
//                   </Typography>
                  

//                   <Controller
//               name="university"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="University"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="college"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Institute/College"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="degree"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Degree"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="startYear"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Start Year"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   onChange={(e) => {
//                     field.onChange(e);
//                     calculateEndYear();
//                   }}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="duration"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Course Duration (years)"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   onChange={(e) => {
//                     field.onChange(e);
//                     calculateEndYear();
//                   }}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="endYear"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="End Year"
//                   margin="normal"
//                   fullWidth
//                   disabled
//                 />
//               )}
//             />



//                 </Box>
                
//               </>
//             )}
//           </>
//         )}

//         {selectedEducationType === "Higher Secondary-12th" && (
//           <>
//             <Controller
//               name="school"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="School"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="yearOfCompletion"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Year of Completion"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="stream"
//               control={control}
//               render={({ field }) => (
//                 <TextField
//                   {...field}
//                   label="Stream"
//                   margin="normal"
//                   fullWidth
//                 />
//               )}
//             />
//           </>
//         )}

//         {selectedEducationType === "Secondary-10th" && (
//           <>
//             <Controller
//               name="school"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="School"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="yearOfCompletion"
//               control={control}
//               rules={{ required: "Required" }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   {...field}
//                   label="Year of Completion"
//                   type="number"
//                   margin="normal"
//                   fullWidth
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//           </>
//         )}

//         <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
//           <Button size="large" variant="outlined" onClick={onPrevious}>
//             Previous
//           </Button>
//           <Button size="large" variant="contained" type="submit">
//             Next
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };

// export default Education;

import {
  Box,
  Typography,
  useTheme,
  Button,
  Select,
  MenuItem,
  TextField,
  useMediaQuery,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setEducation } from "../store";
import { useState } from "react";
import { motion } from "framer-motion";

const Education = ({ onNext, onPrevious }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();

  const education = useSelector((state) => state.education);
  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      educationType: education.educationType || "",
      university: education.university || "",
      college: education.college || "",
      degree: education.degree || "",
      startYear: education.startYear || "",
      duration: education.duration || "",
      endYear: education.endYear || "",
      school: education.school || "",
      yearOfCompletion: education.yearOfCompletion || "",
      stream: education.stream || "",
    },
  });

  const [selectedEducationType, setSelectedEducationType] = useState(education.educationType || "");

  const handleEducationTypeChange = (value) => {
    setSelectedEducationType(value);
    setValue("university", "");
    setValue("college", "");
    setValue("degree", "");
    setValue("startYear", "");
    setValue("duration", "");
    setValue("endYear", "");
    setValue("school", "");
    setValue("yearOfCompletion", "");
    setValue("stream", "");
  };

  const calculateEndYear = () => {
    const startYear = parseInt(getValues("startYear"));
    const duration = parseInt(getValues("duration"));
    if (startYear && duration) {
      setValue("endYear", startYear + duration);
    }
  };

  const onSubmit = (data) => {
    dispatch(setEducation(data));
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        width="100%"
        maxWidth="fit-content"
        p="1rem 4%"
        backgroundColor={theme.palette.background.alt}
        borderRadius="8px"
      >
        <Typography variant="h4" mb="1rem" color={main}>
          Education
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth margin="normal">
            <InputLabel id="educationType">Education Type</InputLabel>
            <Controller
              name="educationType"
              control={control}
              rules={{ required: "Required" }}
              render={({ field }) => (
                <Select
                  {...field}
                  label="Education Type"
                  onChange={(e) => {
                    field.onChange(e);
                    handleEducationTypeChange(e.target.value);
                  }}
                >
                  <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                  <MenuItem value="Graduate">Graduate</MenuItem>
                  <MenuItem value="Under Graduate">Under Graduate</MenuItem>
                  <MenuItem value="Higher Secondary-12th">Higher Secondary-12th</MenuItem>
                  <MenuItem value="Secondary-10th">Secondary-10th</MenuItem>
                </Select>
              )}
            />
          </FormControl>

          {(selectedEducationType === "Post Graduate" ||
            selectedEducationType === "Graduate" ||
            selectedEducationType === "Under Graduate") && (
            <>
              <Controller
                name="university"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="University"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="college"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Institute/College"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="degree"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Degree"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="startYear"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Start Year"
                    type="number"
                    margin="normal"
                    fullWidth
                    onChange={(e) => {
                      field.onChange(e);
                      calculateEndYear();
                    }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="duration"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Course Duration (years)"
                    type="number"
                    margin="normal"
                    fullWidth
                    onChange={(e) => {
                      field.onChange(e);
                      calculateEndYear();
                    }}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="endYear"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="End Year"
                    margin="normal"
                    fullWidth
                    disabled
                  />
                )}
              />
            </>
          )}

          {selectedEducationType === "Higher Secondary-12th" && (
            <>
              <Controller
                name="school"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="School"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="yearOfCompletion"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Year of Completion"
                    type="number"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="stream"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Stream"
                    margin="normal"
                    fullWidth
                  />
                )}
              />
            </>
          )}

          {selectedEducationType === "Secondary-10th" && (
            <>
              <Controller
                name="school"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="School"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
              <Controller
                name="yearOfCompletion"
                control={control}
                rules={{ required: "Required" }}
                render={({ field, fieldState }) => (
                  <TextField
                    {...field}
                    label="Year of Completion"
                    type="number"
                    margin="normal"
                    fullWidth
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message || ""}
                  />
                )}
              />
            </>
          )}

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
    </motion.div>
  );
};

export default Education;
