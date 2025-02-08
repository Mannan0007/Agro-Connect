import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BountySection from "./components/BountySection";
import WhyChoose from "./components/WhyChoose";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword"; // Import your Forgot Password page
import OtpVerification from "./components/OtpVerification"; // Import OTP page
import MapComponent from "../src/components/Map";

function App() {
  return (
    <>
      <Navbar />
      <Routes> {/* ✅ Only Routes here */}
        <Route path="/" element={
          <>
            <HeroSection />
            <BountySection />

                  <MapComponent latitude={30.7333} longitude={76.7794} />



            <WhyChoose />
            <HowItWorks />



            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} /> {/* ✅ New Route */}

        </Routes>
        </>
  );
}

export default App;
