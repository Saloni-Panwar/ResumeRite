import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailSent = () => {
  const navigate = useNavigate();

  return (
    <div className="email-sent-container">
      <div className="email-sent-box">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="blue"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 2L11 13" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" />
          </svg>
        </div>
        <h2>Verification Email Sent</h2>
        <p>Please check your email for the verification link. It may take a few minutes to arrive. Don't forget to check your spam folder.</p>
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default EmailSent;
