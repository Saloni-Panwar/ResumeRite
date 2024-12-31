import { Box, Typography, Button } from "@mui/material";
import { getAllResumes } from "../services/resumeService";
import { useEffect, useState } from "react";

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const fetchedResumes = await getAllResumes();
        setResumes(fetchedResumes);
      } catch (err) {
        setError("Failed to load resumes.");
        console.error(err);
      }
    };
    loadResumes();
  }, []);

  const handleViewResume = (resumeLink) => {
    window.open(resumeLink, "_blank");
  };

  return (
    <Box p="1rem">
      <Typography variant="h5" mb="1rem">Saved Resumes</Typography>
      {error && <Typography color="error">{error}</Typography>}
      {resumes.length === 0 && !error ? (
        <Typography>No resumes found.</Typography>
      ) : (
        resumes.map((resume) => (
          <Box
            key={resume._id}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p="0.5rem"
            mb="0.5rem"
            sx={{ border: "1px solid gray", borderRadius: "4px" }}
          >
            <Typography>{resume.resumeName}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleViewResume(`${process.env.REACT_APP_BACKEND_URL}/api/resume/all`)}
            >
              View
            </Button>
          </Box>
        ))
      )}
    </Box>
  );
};

export default ResumeList;
