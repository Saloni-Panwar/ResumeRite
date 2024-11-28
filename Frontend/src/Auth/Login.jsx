
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
