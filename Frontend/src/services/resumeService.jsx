import axios from "axios";

export const saveResumeToDB = async (resumeName, resumeData) => {
  const formData = new FormData();
  formData.append("resumeName", resumeName);
  formData.append("resumeData", resumeData);

  try {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/resume/save`, formData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ resumeName, resumeData }),
    });



    if (response.status === 201) {
      alert("Resume saved successfully!");
    }
  } catch (error) {
    console.error("Error saving resume:", error);
  }
};
export const getAllResumes = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resume/all`);
    if (!response.ok) throw new Error("Failed to fetch resumes");
    return await response.json();
  } catch (error) {
    console.error("Error fetching resumes:", error);
    return [];
  }
};