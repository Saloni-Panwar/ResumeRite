// import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();

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
//       sx={{ backgroundColor: "#f5f5f5" }} // Light grey background
//     >
//       <Box
//         display="flex"
//         width="70%"
//         maxWidth="900px"
//         boxShadow="0 4px 10px rgba(0, 0, 0, 0.1)"
//         borderRadius="8px"
//         overflow="hidden"
//       >
//         {/* Login Section */}
//         <Box
//           flex={1}
//           p="2rem"
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           sx={{ backgroundColor: "#ffffff" }}
//         >
//           <Typography variant="h4" color="primary" fontWeight="bold" mb="2rem">
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
//             />
//             {/* Password Field */}
//             <TextField
//               fullWidth
//               variant="outlined"
//               label="Password"
//               type="password"
//               margin="normal"
//               required
//             />
//             {/* Remember Me */}
//             <FormControlLabel
//               control={<Checkbox color="primary" />}
//               label="Remember me"
//             />
//             {/* Forgot Password */}
//             <Typography
//               variant="body2"
//               color="primary"
//               align="right"
//               sx={{ cursor: "pointer", mt: "0.5rem" }}
//               onClick={() => console.log("Forgot Password")}
//             >
//               Forgot Password?
//             </Typography>
//             {/* Login Button */}
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               sx={{ mt: "1rem" }}
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
//           sx={{ backgroundColor: "#e3f2fd" }} // Light blue background
//         >
//           <Typography variant="h5" color="textSecondary" mb="1rem">
//             New Here?
//           </Typography>
//           <Button
//             variant="outlined"
//             color="primary"
//             onClick={() => navigate("/signup")}
//             sx={{
//               borderColor: "#1976d2",
//               color: "#1976d2",
//               ":hover": {
//                 backgroundColor: "#1976d2",
//                 color: "#ffffff",
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

const LoginPage = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Access the theme

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted");
    navigate("/");
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
        border={`3px solid ${theme.palette.neutral.light}`} // Added blue-gray border
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
                style: { color: theme.palette.neutral.main },
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
              InputLabelProps={{
                style: { color: theme.palette.neutral.main },
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
