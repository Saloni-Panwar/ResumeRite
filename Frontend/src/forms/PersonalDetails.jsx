

// import { useForm, Controller } from "react-hook-form";
// import TextField from "@mui/material/TextField";
// import { useDispatch, useSelector } from "react-redux";
// import { setPersonalInfo } from "../store";
// import {
//   Box,
//   Typography,
//   useTheme,
//   Button,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";

// const PersonalDetails = ({ onNext }) => {
//   const theme = useTheme();
//   const main = theme.palette.primary.main;
//   const isMobileScreen = useMediaQuery("(max-width:800px)");
//   const dispatch = useDispatch();
//   const personalDetails = useSelector((state) => state.personalInfo);

//   const { handleSubmit, control } = useForm({
//     defaultValues: {
//       firstName: personalDetails.firstName,
//       lastName: personalDetails.lastName,
//       email: personalDetails.email,
//       contactNo: personalDetails.contactNo,
//       address: personalDetails.address,
//       city: personalDetails.city,
//       pinCode: personalDetails.pinCode,
//       specialization: personalDetails.specialization,
//       objective: personalDetails.objective,
//     },
//   });

//   const onSubmit = (data) => {
//     dispatch(setPersonalInfo(data));
//     onNext();
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Box
//         width="100%"
//         maxWidth="fit-content"
//         p="1rem 4%"
//         backgroundColor={theme.palette.background.alt}
//         borderRadius="8px"
//         boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)"
//       >
//         <Typography
//           variant={isMobileScreen ? "h6" : "h4"}
//           mb="1rem"
//           color={main}
//           component={motion.div}
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           Personal Information
//         </Typography>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Box
//             display="flex"
//             flexWrap="wrap"
//             justifyContent="space-between"
//             gap="1rem"
//             component={motion.div}
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <Controller
//               name="firstName"
//               control={control}
//               rules={{
//                 required: "first name is required",
//                 minLength: {
//                   value: 3,
//                   message: "should be at least 3 characters",
//                 },
//                 maxLength: {
//                   value: 20,
//                   message: "should not be more than 20 characters",
//                 },
//                 pattern: {
//                   value: /^[a-zA-Z]+$/,
//                   message: "invalid name",
//                 },
//               }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   label={
//                     <span>
//                       First Name <span style={{ color: "red" }}>*</span>
//                     </span>
//                   }
//                   {...field}
//                   margin="normal"
//                   fullWidth={isMobileScreen}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//             <Controller
//               name="lastName"
//               control={control}
//               rules={{
//                 required: "last name is required",
//                 minLength: {
//                   value: 3,
//                   message: "should be at least 3 characters",
//                 },
//                 maxLength: {
//                   value: 20,
//                   message: "should not be more than 20 characters",
//                 },
//                 pattern: {
//                   value: /^[a-zA-Z]+$/,
//                   message: "invalid  last name",
//                 },
//               }}
//               render={({ field, fieldState }) => (
//                 <TextField
//                   label={
//                     <span>
//                       Last Name <span style={{ color: "red" }}>*</span>
//                     </span>
//                   }
//                   {...field}
//                   margin="normal"
//                   fullWidth={isMobileScreen}
//                   error={!!fieldState.error}
//                   helperText={fieldState.error?.message || ""}
//                 />
//               )}
//             />
//           </Box>

//           {/* Add more form fields with the same pattern here */}
//           <Box
//           display="flex"
//           flexWrap="wrap"
//           justifyContent="space-between"
//           gap="1rem"
//         >
//           <Controller
//             name="email"
//             control={control}
//             rules={{
//               required: "email is required",
//               pattern: {
//                 value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//                 message: "Invalid email",
//               },
//             }}
//             render={({ field, fieldState }) => (
//               <TextField
//               label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
//               {...field}
//                 margin="normal"
//                 fullWidth={isMobileScreen ? true : false}
//                 error={!!fieldState.error}
//                 helperText={fieldState.error?.message || ""}
//               />
//             )}
//           />
//           <Controller
//             name="contactNo"
//             control={control}
//             rules={{
//               required: "Contact No is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Invalid contact number",
//               },
//             }}
//             render={({ field, fieldState }) => (
//               <TextField
//               label={<span>Contact No <span style={{ color: 'red' }}>*</span></span>}
//               {...field}
//                 margin="normal"
//                 fullWidth={isMobileScreen ? true : false}
//                 error={!!fieldState.error}
//                 helperText={fieldState.error?.message || ""}
//               />
//             )}
//           />
//         </Box>
//         <Controller
//           name="address"
//           control={control}
//           rules={{
//             required: "Address is required",
//             minLength: {
//               value: 4,
//               message: "should be at least 4 characters",
//             },
//             maxLength: {
//               value: 100,
//               message: "should not be more than 100 characters",
//             },
//           }}
//           render={({ field, fieldState }) => (
//             <TextField
//             label={<span>Address <span style={{ color: 'red' }}>*</span></span>}

//               {...field}
//               margin="normal"
//               fullWidth
//               error={!!fieldState.error}
//               helperText={fieldState.error?.message || ""}
//             />
//           )}
//         />

//         <Box
//           display="flex"
//           flexWrap="wrap"
//           justifyContent="space-between"
//           gap="1rem"
//         >
//           <Controller
//             name="city"
//             control={control}
//             rules={{
//               required: "City is required",
//               minLength: {
//                 value: 3,
//                 message: "should be at least 3 characters",
//               },
//               maxLength: {
//                 value: 50,
//                 message: "should not be more than 50 characters",
//               },
//             }}
//             render={({ field, fieldState }) => (
//               <TextField
//               label={<span>City <span style={{ color: 'red' }}>*</span></span>}

//                 {...field}
//                 margin="normal"
//                 fullWidth={isMobileScreen ? true : false}
//                 error={!!fieldState.error}
//                 helperText={fieldState.error?.message || ""}
//               />
//             )}
//           />
//           <Controller
//             name="pinCode"
//             control={control}
//             rules={{
//               required: "PinCode is required",
//               pattern: {
//                 value: /^[0-9]{6}$/,
//                 message: "Invalid  Pin Code",
//               },
//             }}
//             render={({ field, fieldState }) => (
//               <TextField
//               label={<span>Pin code <span style={{ color: 'red' }}>*</span></span>}
//               {...field}
//                 margin="normal"
//                 fullWidth={isMobileScreen ? true : false}
//                 error={!!fieldState.error}
//                 helperText={fieldState.error?.message || ""}
//               />
//             )}
//           />
//         </Box>
//         <Controller
//           name="specialization"
//           control={control}
//           rules={{
//             required: "Specialization is required",
//             minLength: {
//               value: 4,
//               message: "should be at least 4 characters",
//             },
//             maxLength: {
//               value: 30,
//               message: "should not be more than 30 characters",
//             },
//           }}
//           render={({ field, fieldState }) => (
//             <TextField
//             label={<span>Specialization<span style={{ color: 'red' }}>*</span></span>}
//             {...field}
//               margin="normal"
//               fullWidth
//               placeholder="eg. 'Designer', 'Developer', 'Data Analyst'"
//               error={!!fieldState.error}
//               helperText={fieldState.error?.message || ""}
//             />
//           )}
//         />

//         <Box width="100%">
//           <Controller
//             name="objective"
//             control={control}
//             rules={{
//               required: "Objective is required",
//               minLength: {
//                 value: 50,
//                 message: "should be at least 50 characters",
//               },
//               maxLength: {
//                 value: 400,
//                 message: "should not be more thn 400 characters",
//               },
//             }}
//             render={({ field, fieldState }) => (
//               <TextField
//               label={<span>Objective <span style={{ color: 'red' }}>*</span></span>}
//               {...field}
//                 multiline
//                 margin="normal"
//                 placeholder="Write something about yourself..."
//                 fullWidth
//                 rows={4}
//                 error={!!fieldState.error}
//                 helperText={fieldState.error?.message || ""}
//               />
//             )}
//           />
//         </Box>
//           <Box
//             display="flex"
//             mt="1rem"
//             gap="1rem"
//             justifyContent="end"
//           >
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <Button size="large" variant="contained" type="submit">
//                 Next
//               </Button>
//             </motion.div>
//           </Box>
//         </form>
//       </Box>
//     </motion.div>
//   );
// };

// export default PersonalDetails;
import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { setPersonalInfo } from "../store";
import {
  Box,
  Typography,
  useTheme,
  Button,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";

const PersonalDetails = ({ onNext }) => {
  const theme = useTheme();
  const main = theme.palette.primary.main;
  const isMobileScreen = useMediaQuery("(max-width:800px)");
  const dispatch = useDispatch();
  const personalDetails = useSelector((state) => state.personalInfo);

  const { handleSubmit, control } = useForm({
    defaultValues: {
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
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        width="100%"
        maxWidth="fit-content"
        p="1rem 4%"
        backgroundColor={theme.palette.background.alt}
        borderRadius="8px"
        boxShadow="0px 8px 15px rgba(0, 0, 0, 0.1)"
      >
        <Typography
          variant={isMobileScreen ? "h6" : "h4"}
          mb="1rem"
          color={main}
          component={motion.div}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Personal Information
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
            gap="1rem"
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
                  value: /^[A-Z][a-z]+$/,
                  message: "First name should start with an uppercase letter",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  label={
                    <span>
                      First Name <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  {...field}
                  margin="normal"
                  fullWidth={isMobileScreen}
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
                  value: /^[A-Z][a-z]+$/,
                  message: "Last name should start with an uppercase letter",
                },
              }}
              render={({ field, fieldState }) => (
                <TextField
                  label={
                    <span>
                      Last Name <span style={{ color: "red" }}>*</span>
                    </span>
                  }
                  {...field}
                  margin="normal"
                  fullWidth={isMobileScreen}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message || ""}
                />
              )}
            />
          </Box>
          {/* Add more form fields with the same pattern here */}
          <Box display="flex" flexWrap="wrap" justifyContent="space-between" gap="1rem">
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
                  label={<span>Email <span style={{ color: 'red' }}>*</span></span>}
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
                  label={<span>Contact No <span style={{ color: 'red' }}>*</span></span>}
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
            label={<span>Address <span style={{ color: 'red' }}>*</span></span>}

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
              label={<span>City <span style={{ color: 'red' }}>*</span></span>}

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
              label={<span>Pin code <span style={{ color: 'red' }}>*</span></span>}
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
            label={<span>Specialization<span style={{ color: 'red' }}>*</span></span>}
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
              label={<span>Objective <span style={{ color: 'red' }}>*</span></span>}
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

          <Box
            display="flex"
            mt="1rem"
            gap="1rem"
            justifyContent="end"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button size="large" variant="contained" type="submit">
                Next
              </Button>
            </motion.div>
          </Box>
        </form>
      </Box>
    </motion.div>
  );
};

export default PersonalDetails;
