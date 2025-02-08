import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { signInWithGoogle } from "../firebase"; // Firebase se import karein
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>It's good to have you back!</h2>
        <form>
          <div className="input-group">
            <label>Email Address <span>*</span></label>
            <input type="email" placeholder="Email Id" required />
          </div>

          <div className="input-group password-group">
            <label>Password <span>*</span></label>
            <div className="password-wrapper">
              <input type={showPassword ? "text" : "password"} placeholder="Password" required />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div className="terms">
            <input type="checkbox" required />
            <p>By signing in, you agree to our <Link to="/terms">terms and conditions</Link> and <Link to="/privacy">Privacy Policy</Link> <span>*</span></p>
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>

        {/* Google Login Button */}
        <button className="google-btn" onClick={signInWithGoogle}>
          <FaGoogle /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
