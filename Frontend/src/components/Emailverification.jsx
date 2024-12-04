import React from 'react';
// import 'index.css';

const EmailVerified = () => {
  return (
    <div className="email-verified-container">
      <div className="email-verified-box">
        <div className="checkmark-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2>Email Verified</h2>
        <p>Your email address was successfully verified.</p>
        <button className="back-button">Back to</button>
      </div>
    </div>
  );
};

export default EmailVerified;
