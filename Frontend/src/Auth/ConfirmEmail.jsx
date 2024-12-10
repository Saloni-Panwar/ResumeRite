import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ConfirmEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/auth/confirm/${token}`);
        if (response.data.success) {
          navigate("/email-verified"); // Navigate to Email Verified page
        }
      } catch (error) {
        console.error("Email verification failed", error);
      }
    };
    verifyEmail();
  }, [token, navigate]);

  return <p>Verifying your email, please wait...</p>;
};

export default ConfirmEmail;
