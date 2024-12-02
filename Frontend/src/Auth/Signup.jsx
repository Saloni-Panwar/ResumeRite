// import { Box, Button, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom"; 

// const SignUpPage = () => {
//   const navigate = useNavigate(); // Initialize useNavigate

// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";

// const SignUpPage = () => {
//   const navigate = useNavigate(); 
//   const theme = useTheme(); 

//   const handleSignUp = (event) => {
//     event.preventDefault();
//     console.log("Sign-up form submitted");
//     // After successful sign-up, navigate to the home page
//     navigate("/");

//     navigate("/"); 

//   };

//   return (
//     <Box
//       display="flex"
//       flexDirection="column"
//       alignItems="center"
//       justifyContent="center"
//       height="100vh"
//       p="2rem"
//     >
//       <Typography variant="h4" color="primary" mb="2rem">
//         SIGN UP
//       </Typography>
//       <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
//         {/* Name Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Full Name"
//           type="text"
//           margin="normal"
//           required
//         />

//         {/* Email Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Email"
//           type="email"
//           margin="normal"
//           required
//         />

//         {/* Password Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Password"
//           type="password"
//           margin="normal"
//           required
//         />

//         {/* Confirm Password Field */}
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Confirm Password"
//           type="password"
//           margin="normal"
//           required
//         />

//         {/* Sign Up Button */}
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           fullWidth
//           sx={{ marginTop: "1rem" }}
//         >
//           Sign Up
//         </Button>

//         {/* Link to Login Page */}
//         <Typography
//           variant="body2"
//           color="primary"
//           sx={{ cursor: "pointer", mt: "1rem" }}
//           onClick={() => navigate("/login")}
//         >
//           Already have an account? Log in here.
//         </Typography>

//       height="100vh"
//       sx={{
//         backgroundColor: theme.palette.background.default, 
//         color: theme.palette.text.primary, 
//       }}
//     >
//       {/* Left Section */}
//       <Box
//         flex={1}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           backgroundColor: theme.palette.primary.main, 
//           color: theme.palette.primary.contrastText,
//         }}
//       >
//         <Typography variant="h3" fontWeight="bold" mb="1rem">
//           Welcome Back
//         </Typography>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: theme.palette.primary.contrastText,
//             color: theme.palette.primary.main,
//             fontWeight: "bold",
//             "&:hover": {
//               backgroundColor: theme.palette.background.alt,
//             },
//           }}
//           onClick={() => navigate("/login")}
//         >
//          Login
//         </Button>
//       </Box>

//       {/* Right Section */}
//       <Box
//         flex={2}
//         display="flex"
//         flexDirection="column"
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           backgroundColor: theme.palette.background.alt, // Dynamic alt background
//           padding: "2rem",
//           color: theme.palette.text.primary,
//         }}
//       >
//         <Typography variant="h4" color="primary" fontWeight="bold" mb="2rem">
//           Create Account
//         </Typography>
//         <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
//           {/* First Name Field */}
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="First Name"
//             type="text"
//             margin="normal"
//             required
//             InputLabelProps={{
//               required: true,
//               sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: theme.palette.neutral.medium,
//                 },
//                 "&:hover fieldset": {
//                   borderColor: theme.palette.primary.main,
//                 },
//               },
//             }}
//           />
//           {/* Last Name Field */}
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="Last Name"
//             type="text"
//             margin="normal"
//             required
//             InputLabelProps={{
//               required: true,
//               sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: theme.palette.neutral.medium,
//                 },
//                 "&:hover fieldset": {
//                   borderColor: theme.palette.primary.main,
//                 },
//               },
//             }}
//           />
//           {/* Email Field */}
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="Email"
//             type="email"
//             margin="normal"
//             required
//             InputLabelProps={{
//               required: true,
//               sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: theme.palette.neutral.medium,
//                 },
//                 "&:hover fieldset": {
//                   borderColor: theme.palette.primary.main,
//                 },
//               },
//             }}
//           />
//           {/* Password Field */}
//           <TextField
//             fullWidth
//             variant="outlined"
//             label="Password"
//             type="password"
//             margin="normal"
//             required
//             InputLabelProps={{
//               required: true,
//               sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//             }}
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 "& fieldset": {
//                   borderColor: theme.palette.neutral.medium,
//                 },
//                 "&:hover fieldset": {
//                   borderColor: theme.palette.primary.main,
//                 },
//               },
//             }}
//           />
//           {/* Sign Up Button */}
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             sx={{ marginTop: "1rem" }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default SignUpPage;








import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/auth/signup", {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      alert(response.data.message);
      // Navigate to the home page after successful sign-up
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");

import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const SignUpPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError(""); // Clear error if valid
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (!passwordError) {
      console.log("Sign-up form submitted");
      navigate("/");
    } else {
      console.log("Please fix errors before submitting.");
 
    }
  };

  return (
    <Box
      display="flex"
      height="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" color="primary" mb="2rem">
        SIGN UP
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        maxWidth="400px"
        width="100%"
      >
        {/* Full Name Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Full Name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Email Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Confirm Password Field */}
        <TextField
          fullWidth
          variant="outlined"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          margin="normal"
          required
          InputLabelProps={{
            required: true,
            sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
          }}
        />

        {/* Sign Up Button */}

      {/* Left Section */}
      <Box
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        }}
      >
        <Typography variant="h3" fontWeight="bold" mb="1rem">
          Welcome Back
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: theme.palette.background.alt,
            },
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </Box>

      {/* Right Section */}
      <Box
        flex={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          color: theme.palette.text.primary,
        }}
      >
        <Typography variant="h4" color="primary" fontWeight="bold" mb="2rem">
          Create Account
        </Typography>
        <Box component="form" onSubmit={handleSignUp} maxWidth="400px" width="100%">
          {/* First Name Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="First Name"
            type="text"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
          {/* Last Name Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Last Name"
            type="text"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
          {/* Email Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Email"
            type="email"
            margin="normal"
            required
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
          {/* Password Field */}
          <TextField
            fullWidth
            variant="outlined"
            label="Password"
            type="password"
            margin="normal"
            required
            value={password}
            onChange={handlePasswordChange}
            error={Boolean(passwordError)}
            helperText={passwordError}
            InputLabelProps={{
              required: true,
              sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: theme.palette.neutral.medium,
                },
                "&:hover fieldset": {
                  borderColor: theme.palette.primary.main,
                },
              },
            }}
          />
          {/* Sign Up Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "1rem" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUpPage;
