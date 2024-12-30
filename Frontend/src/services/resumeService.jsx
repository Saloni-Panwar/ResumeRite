import axios from "axios";

export const saveResumeToDB = async (resumeName, pdfData) => {
  const formData = new FormData();
  formData.append("resumeName", resumeName);
  formData.append("templateData", pdfData);

  try {
    const response = await axios.post("http://localhost:3001/api/resume/save", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 201) {
      alert("Resume saved successfully!");
    }
  } catch (error) {
    console.error("Error saving resume:", error);
  }
};
