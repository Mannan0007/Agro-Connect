import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset link sent to:", email);
    
    // Simulating an API call for sending OTP
    alert(`OTP sent to ${email}`);
    
    // Redirect user to OTP verification page
    navigate("/otp-verification");
  };

  return (
    <div className="forgot-password-container">
      <div className="header">
        <h1>Forgot Password</h1>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="form-title">I forgot my password</h3>
          <label>Enter Email Address <span>*</span></label>
          <input
            type="email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p>Back to <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default ForgotPassword;
