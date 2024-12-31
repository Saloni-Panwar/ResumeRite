import { Box, Typography, Button, useTheme } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

const SavedResumes = () => {
  const theme = useTheme();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resume/saved`);
        console.log("Fetched Resumes:", response.messagey);
        setResumes(response.data);
      } catch (error) {
        console.error("Error fetching resumes:", error);
      }
    };
    fetchResumes();
  }, []);
  

  const handleView = (templateData) => {
    const newWindow = window.open("", "_blank");
    newWindow.document.write(templateData);
    newWindow.document.close();
  };

  return (
    <Box
      p="2rem"
      sx={{
        width: "100%",
        maxWidth: "98%",
        margin: "0 auto",
        marginTop: "10px",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" mb="1.5rem">
        Saved Resumes
      </Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        {resumes.map((resume) => (
          <Box
            key={resume._id}
            p="1rem"
            border="1px solid"
            borderColor={theme.palette.divider}
            borderRadius="8px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{resume.resumeName}</Typography>
            <Button
              variant="contained"
              onClick={() => handleView(resume.templateData)}
            >
              View
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SavedResumes;
