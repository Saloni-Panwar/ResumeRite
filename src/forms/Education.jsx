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
import { useDispatch } from "react-redux";
import { setEducation } from "../store";
import { useSelector } from "react-redux";

const Education = ({ onNext, onPrevious }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();
  // getting the data if there are data for education in the global state
  const education = useSelector((state) => state.education);

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      // this data is from the global state
      educationType: education.educationType,
      university: education.university,
      college: education.college,
      startYear: education.startYear,
      endYear: education.endYear,
      description: education.description,
    },
  });

  const onSubmit = (data) => {
    // the form data will be dispatched to global state
    dispatch(setEducation(data));
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
        Education
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <InputLabel id="educationType">Education Type</InputLabel>
          <Controller
            name="educationType"
            control={control}
            rules={{
              required: "Required",
            }}
            render={({ field, fieldState }) => (
              <Select
                id="educationType"
                label="educationType"
                {...field}
                error={!!fieldState.error}
              >
                <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                <MenuItem value="Graduate">Graduate</MenuItem>
                <MenuItem value="Under Graduate">Under Graduate</MenuItem>
                <MenuItem value="Higher Secondary-12th">
                  Higher Secondary-12th
                </MenuItem>
                <MenuItem value="Secondary School Certificate -10th">
                  Secondary School Certificate -10th
                </MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={isMobileScreen ? "0rem" : "1rem"}
        >
          <Controller
            name="university"
            control={control}
            rules={{
              required: "required",
              minLength: {
                value: 4,
                message: "should be at least 4 characters",
              },
              maxLength: {
                value: 50,
                message: "should not be more than 50 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="University"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="college"
            control={control}
            rules={{
              required: "required",
              minLength: {
                value: 4,
                message: "should be at least 4 characters",
              },
              maxLength: {
                value: 50,
                message: "should not be more than 50 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="College"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Box
          display="flex"
          flexWrap={isMobileScreen ? "wrap" : "nowrap"}
          justifyContent="space-between"
          gap="1rem"
          m="1rem 0"
        >
          <FormControl fullWidth>
            <InputLabel id="startYear">Start Year</InputLabel>
            <Controller
              name="startYear"
              control={control}
              rules={{
                required: "Required",
              }}
              render={({ field, fieldState }) => (
                <Select
                  id="startYear"
                  label="startYear"
                  {...field}
                  error={!!fieldState.error}
                >
                  <MenuItem value="2015">2015</MenuItem>
                  <MenuItem value="2016">2016</MenuItem>
                  <MenuItem value="2017">2017</MenuItem>
                  <MenuItem value="2018">2018</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="endYear">End year</InputLabel>
            <Controller
              name="endYear"
              control={control}
              rules={{
                required: "Required",
                validate: {
                  notLessThanStartYear: (value) =>
                    parseInt(value) >= parseInt(getValues("startYear"))
                      ? true
                      : "End year must be greater than or equal to start year",
                },
              }}
              render={({ field, fieldState }) => (
                <Select
                  id="endYear"
                  label="endYear"
                  {...field}
                  error={!!fieldState.error}
                >
                  <MenuItem value="2015">2015</MenuItem>
                  <MenuItem value="2016">2016</MenuItem>
                  <MenuItem value="2017">2017</MenuItem>
                  <MenuItem value="2018">2018</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                  <MenuItem value="2022">2022</MenuItem>
                  <MenuItem value="2023">2023</MenuItem>
                  <MenuItem value="2024">2024</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </Box>
        <Controller
          name="description"
          control={control}
          rules={{
            required: "required",
            minLength: {
              value: 50,
              message: "should be at least 50 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Description"
              {...field}
              margin="normal"
              fullWidth
              multiline
              rows={2}
              placeholder="Write something about your learning journey..."
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />
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
  );
};

export default Education;
