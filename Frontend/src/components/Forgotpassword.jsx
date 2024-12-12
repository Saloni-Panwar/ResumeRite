import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auth/forgot-password", { email });
            alert("Verification code sent to your email");
            navigate("/verify-code", { state: { email } });
        } catch (err) {
            setError(err.response?.data?.message || "Error sending verification code");
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            flexDirection="column"
        >
            <Typography variant="h4" mb={2} fontWeight={"bold"} sx={{ color: theme.palette.primary.main }}>
                Forgot Password?
            </Typography>

            <Typography variant="h9" mb={2} fontWeight={"light"} >
                No worries,we'll send you reset instructions.
            </Typography>


            <form onSubmit={handleSubmit} style={{ width: "300px" }}>
                <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    margin="normal"
                    InputLabelProps={{
                        required: true,
                        sx: { "& .MuiInputLabel-asterisk": { color: "red" } },
                    }}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" variant="contained" fullWidth>
                    Submit
                </Button>


            </form>

            <a href="/login" className="link">← Back to log in</a>
            </Box>
    );
};

export default ForgotPassword;
