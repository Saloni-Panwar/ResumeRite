import React, { useState } from "react";
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });


// import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useTheme } from "@mui/material/styles";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const theme = useTheme(); // Access the theme

//   const handleLogin = (event) => {
//     event.preventDefault();
//     console.log("Login form submitted");
//     navigate("/");
//   };

//   return (
//     <Box
//       display="flex"
//       justifyContent="center"
//       alignItems="center"
//       height="100vh"
//       sx={{
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.neutral.main,
//       }}
//     >
//       <Box
//         display="flex"
//         width="70%"
//         maxWidth="900px"
//         boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
//         borderRadius="8px"
//         overflow="hidden"
//         border={`3px solid ${theme.palette.neutral.light}`} // Added blue-gray border
//       >
//         {/* Login Section */}
//         <Box
//           flex={1}
//           p="2rem"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           sx={{ backgroundColor: theme.palette.background.alt }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight="bold"
//             mb="2rem"
//             sx={{ color: theme.palette.primary.main }}
//           >
//             Login to Your Account
//           </Typography>
//           <Box component="form" onSubmit={handleLogin} width="100%" maxWidth="400px">
//             {/* Email Field */}
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Email"
//               type="email"
//               margin="normal"
//               required
              
//               InputLabelProps={{
//                 required: true,
//                 sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//               }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: theme.palette.neutral.main,
//                   },
//                   "&:hover fieldset": {
//                     borderColor: theme.palette.primary.main,
//                   },
//                 },
//               }}
//             />
//             {/* Password Field */}
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Password"
//               type="password"
//               margin="normal"
//               required
//               InputLabelProps={{
//                 required: true,
//                 sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
//               }}
//               sx={{
//                 "& .MuiOutlinedInput-root": {
//                   "& fieldset": {
//                     borderColor: theme.palette.neutral.main,
//                   },
//                   "&:hover fieldset": {
//                     borderColor: theme.palette.primary.main,
//                   },
//                 },
//               }}
//             />
//             {/* Remember Me */}
//             <FormControlLabel
//               control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
//               label="Remember me"
//             />
//             {/* Forgot Password */}
//             <Typography
//               variant="body2"
//               align="right"
//               sx={{
//                 cursor: "pointer",
//                 mt: "0.5rem",
//                 color: theme.palette.primary.main,
//               }}
//               onClick={() => console.log("Forgot Password")}
//             >
//               Forgot Password?
//             </Typography>
//             {/* Login Button */}
//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 mt: "1rem",
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.background.default,
//                 "&:hover": {
//                   backgroundColor: theme.palette.primary.dark,
//                 },
//               }}
//             >
//               Sign In
//             </Button>
//           </Box>
//         </Box>

//         {/* Signup Section */}
//         <Box
//           flex={1}
//           p="2rem"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           sx={{ backgroundColor: theme.palette.primary.light }}
//         >
//           <Typography variant="h5" color="textSecondary" mb="1rem">
//             New Here?
//           </Typography>
//           <Button
//             variant="outlined"
//             onClick={() => navigate("/signup")}
//             sx={{
//               borderColor: theme.palette.primary.main,
//               color: theme.palette.primary.main,
//               ":hover": {
//                 backgroundColor: theme.palette.primary.main,
//                 color: theme.palette.background.default,
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default LoginPage;

import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Regex for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError(""); // Clear error if valid
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (!passwordError) {
      console.log("Login form submitted");
      navigate("/");
    } else {
      console.log("Please correct the errors before submitting.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("http://localhost:3000/api/auth/login", {
  //       email: formData.email,
  //       password: formData.password,
  //     });
  //     console.log("Form Data:", formData);
      
  //     alert(response.data.message);

  //     // Save the token in localStorage for future use
  //     localStorage.setItem("authToken", response.data.token);

  //     // Navigate to the home page after successful login
  //     navigate("/");
  //   } catch (error) {
    
  //     console.error(error);
  //     alert(error.response?.data?.message || "Something went wrong");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
        const response = await axios.post("http://localhost:3000/api/auth/login", {
            email: formData.email,
            password: formData.password,
        });
        console.log("Response:", response.data);

        alert(response.data.message);
        localStorage.setItem("authToken", response.data.token);
        navigate("/");
    } catch (error) {
        console.error("Error Response:", error.response);
        alert(error.response?.data?.message || "Something went wrong");
    }
};


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.neutral.main,
      }}
    >
      <Typography variant="h4" color="primary" mb="2rem">
        LOGIN
      </Typography>
      <Box component="form" onSubmit={handleSubmit} maxWidth="400px" width="100%">
        {/* Email/Username Field */}
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

        {/* Remember Me Checkbox */}
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember me"
        />

        {/* Forgot Password Link */}
        <Typography
          variant="body2"
          color="primary"
          onClick={() => console.log("Navigate to forgot password page")}
          sx={{ cursor: "pointer", mt: "1rem" }}
        >
          Forgot Password?
        </Typography>

        {/* Login Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: "1rem" }}
      <Box
        display="flex"
        width="70%"
        maxWidth="900px"
        boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
        borderRadius="8px"
        overflow="hidden"
        border={`3px solid ${theme.palette.neutral.light}`}
      >
        {/* Login Section */}
        <Box
          flex={1}
          p="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: theme.palette.background.alt }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="2rem"
            sx={{ color: theme.palette.primary.main }}
          >
            Login to Your Account
          </Typography>
          <Box component="form" onSubmit={handleLogin} width="100%" maxWidth="400px">
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
                    borderColor: theme.palette.neutral.main,
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
                    borderColor: theme.palette.neutral.main,
                  },
                  "&:hover fieldset": {
                    borderColor: theme.palette.primary.main,
                  },
                },
              }}
            />
            {/* Remember Me */}
            <FormControlLabel
              control={<Checkbox sx={{ color: theme.palette.primary.main }} />}
              label="Remember me"
            />
            {/* Forgot Password */}
            <Typography
              variant="body2"
              align="right"
              sx={{
                cursor: "pointer",
                mt: "0.5rem",
                color: theme.palette.primary.main,
              }}
              onClick={() => console.log("Forgot Password")}
            >
              Forgot Password?
            </Typography>
            {/* Login Button */}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: "1rem",
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>

        {/* Signup Section */}
        <Box
          flex={1}
          p="2rem"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: theme.palette.primary.light }}
        >
          <Typography variant="h5" color="textSecondary" mb="1rem">
            New Here?
          </Typography>
          <Button
            variant="outlined"
            onClick={() => navigate("/signup")}
            sx={{
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              ":hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.default,
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
