import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { setPersonalInfo } from "../store";

import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "react-redux";

const PersonalDetails = ({ onNext }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;

  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();
  //getting the personal info form global state
  const personalDetails = useSelector((state) => state.personalInfo);

  const { handleSubmit, control } = useForm({
    defaultValues: {
      // these values are from personal info in global state
      firstName: personalDetails.firstName,
      lastName: personalDetails.lastName,
      email: personalDetails.email,
      contactNo: personalDetails.contactNo,
      address: personalDetails.address,
      city: personalDetails.city,
      pinCode: personalDetails.pinCode,
      specialization: personalDetails.specialization,
      objective: personalDetails.objective,
    },
  });

  const onSubmit = (data) => {
    dispatch(setPersonalInfo(data));
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
      <Typography variant={isMobileScreen ? "h6" : "h4"} mb="1rem" color={main}>
        Personal Information
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "first name is required",
              minLength: {
                value: 3,
                message: "should be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "should not be more than 20 characters",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "invalid name",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="First Name"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: "last name is required",
              minLength: {
                value: 3,
                message: "should be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "should not be more than 20 characters",
              },
              pattern: {
                value: /^[a-zA-Z]+$/,
                message: "invalid  last name",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Last Name"
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
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Email"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="contactNo"
            control={control}
            rules={{
              required: "Contact No is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Contact No"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Controller
          name="address"
          control={control}
          rules={{
            required: "Address is required",
            minLength: {
              value: 4,
              message: "should be at least 4 characters",
            },
            maxLength: {
              value: 100,
              message: "should not be more than 100 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Address"
              {...field}
              margin="normal"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap="1rem"
        >
          <Controller
            name="city"
            control={control}
            rules={{
              required: "City is required",
              minLength: {
                value: 3,
                message: "should be at least 3 characters",
              },
              maxLength: {
                value: 50,
                message: "should not be more than 50 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="City"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
          <Controller
            name="pinCode"
            control={control}
            rules={{
              required: "PinCode is required",
              pattern: {
                value: /^[0-9]{6}$/,
                message: "Invalid  Pin Code",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="PinCode"
                {...field}
                margin="normal"
                fullWidth={isMobileScreen ? true : false}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Controller
          name="specialization"
          control={control}
          rules={{
            required: "Specialization is required",
            minLength: {
              value: 4,
              message: "should be at least 4 characters",
            },
            maxLength: {
              value: 30,
              message: "should not be more than 30 characters",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              label="Specialization"
              {...field}
              margin="normal"
              fullWidth
              placeholder="eg. 'Designer', 'Developer', 'Data Analyst'"
              error={!!fieldState.error}
              helperText={fieldState.error?.message || ""}
            />
          )}
        />

        <Box width="100%">
          <Controller
            name="objective"
            control={control}
            rules={{
              required: "Objective is required",
              minLength: {
                value: 50,
                message: "should be at least 50 characters",
              },
              maxLength: {
                value: 400,
                message: "should not be more thn 400 characters",
              },
            }}
            render={({ field, fieldState }) => (
              <TextField
                label="Objective"
                {...field}
                multiline
                margin="normal"
                placeholder="Write something about yourself..."
                fullWidth
                rows={4}
                error={!!fieldState.error}
                helperText={fieldState.error?.message || ""}
              />
            )}
          />
        </Box>
        <Box display="flex" mt="1rem" gap="1rem" justifyContent="end">
          <Button size="large" variant="contained" type="submit">
            Next
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default PersonalDetails;
