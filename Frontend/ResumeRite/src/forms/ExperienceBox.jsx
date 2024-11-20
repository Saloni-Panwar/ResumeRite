import {
  TextField,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

const ExperienceBox = ({ control, index, getValues }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const gray = theme.palette.neutral.light;

  const isMobileScreen = useMediaQuery("(max-width:800px)");
  return (
    <Box>
      <Typography
        color={main}
        p="0.5rem"
        sx={{ borderBottom: `1px solid ${gray}` }}
      >
        Experience {index + 1}
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        gap={isMobileScreen ? "0rem" : "1rem"}
      >
        <Controller
          name={`jobTitle[${index}]`}
          control={control}
          rules={{
            required: "Job Title is required",
            minLength: {
              value: 4,
              message: "Job Title should be at least 4 characters",
            },
            maxLength: {
              value: 40,
              message: "Job Title should not be more than 40 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Job Title"
              {...field}
              margin="normal"
              fullWidth={isMobileScreen ? true : false}
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />
        <Controller
          name={`orgName[${index}]`}
          control={control}
          rules={{
            required: "Organization Name is required",
            minLength: {
              value: 4,
              message: "Organization Name should be at least 4 characters",
            },
            maxLength: {
              value: 60,
              message:
                "Organization Name should not be more than 60 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Organization Name"
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
        mt="1rem"
      >
        <FormControl fullWidth>
          <InputLabel id={`startYearLabel[${index}]`}>Start Year</InputLabel>
          <Controller
            name={`StartYear[${index}]`}
            control={control}
            rules={{
              required: "Required",
            }}
            render={({ field, fieldState }) => (
              <Select
                id={`startYearLabel[${index}]`}
                label="Start Year"
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
          <InputLabel id={`endYearLabel[${index}]`}>End Year</InputLabel>
          <Controller
            name={`endYear[${index}]`}
            control={control}
            rules={{
              required: "Required",
              validate: {
                notLessThanStartYear: (value) =>
                  parseInt(value) >= parseInt(getValues(`StartYear[${index}]`))
                    ? true
                    : "End year must be greater than or equal to start year",
              },
            }}
            render={({ field, fieldState }) => (
              <Select
                id={`endYearLabel[${index}]`}
                label="End Year"
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
      <Box width="100%" mt="1rem">
        <Controller
          name={`description[${index}]`}
          control={control}
          rules={{
            required: "description is required",
            minLength: {
              value: 50,
              message: "description should be at least 50 characters",
            },
            maxLength: {
              value: 400,
              message: "description should not be more than 400 characters",
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
              placeholder="Write something about your experience..."
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default ExperienceBox;
