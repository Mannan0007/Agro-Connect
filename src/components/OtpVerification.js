import React, { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered OTP: ${otp}`);
    // Here, you can add logic to verify OTP with backend
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h3>I forgot my password</h3>
        <form onSubmit={handleSubmit}>
          <label>Enter OTP <span>*</span></label>
          <input 
            type="text" 
            placeholder="Enter OTP" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)}
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
