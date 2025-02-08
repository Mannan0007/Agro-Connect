import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import missionImage from "../assets/mission.png";
import hero from "../assets/hero.jpg";
import visionImage from "../assets/hero.jpg"; // Correct vision image
import Card2 from "./Cards/Card2";
import "./HeroSection.css";
import farmer1 from '../assets/360_F_380278806_hU362lmcYRqkb8reIageNj4Qh7ID9mIg.jpg'
import farmer2 from '../assets/Roh_VitalFarms_Aug23_269-2048x1366.jpg'
import Card from "./Cards/Card";
const HeroSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, delay: 100 });
  }, []);

  return (
<>
<div className="tagline">
  <div className="tagline-background">
    <img src={farmer1} alt="Vision" className="background-img" />
    <img src={farmer2} alt="Vision" className="background-img" />
  </div>
 <div className="tagline-content">
    <h1>Connecting Farmers to Markets, Growing Prosperity Together!</h1>
  </div></div>


      <div className='our-heading' >
      <h1>Who are we?</h1>
      </div> 
      <div className="card-main">
      <Card  title={'We are on a Mission'} description={'Our mission is to empower farmers to share their organic bounty while offering health-conscious consumers easy access to fresh, ethically sourced foods. Through our dedication to transparency, quality, and environmental responsibility, we strive to cultivate a community where well-being and sustainability converge.'} />
      <Card  title={'We have a Vision'}  description={'Our vision is to establish a digital marketplace that champions wellness and vitality by connecting consumers with a diverse array of organic farm produce. We aim to empower farmers to share their organic harvests with health-conscious consumers, fostering a community where sustainable, ethical, and nourishing food choices are readily accessible.'} />
      {/* <Card/> */}


      </div>



    <section className="marketplace-mission">
      <div className="section-container">
        <div className="image-text-container">
          <div className="section-text" data-aos="fade-right">
            {/* <h1><b>Marketplace</b></h1> */}
            </div>
            

            
          <div>
              
<Card2 
  title="What do we offer>" 
  buttonText="Explore" 
  color="#4CAF50" 
  onClick={() => alert("Navigating to products...")}
/>

<Card2 
  title="Why Choose us?" 
  buttonText="Get Started" 
  color="#8D6E63" 
  onClick={() => alert("Navigating to seller page...")}
/>





          </div>
          <div className="image-wrapper" data-aos="fade-left">
            {/* <img src={hero} alt="Marketplace" className="section-image" /> */}
          </div>
        </div>

        <div className="image-text-container reverse">
          <div className="image-wrapper" data-aos="fade-right">
            {/* <img src={missionImage} alt="Mission" className="section-image" /> */}
          </div>
  

        {/* Vision Section (Text Left, Image Right) */}
   
          <div className="image-wrapper" data-aos="fade-left">
            {/* <img src={visionImage} alt="Vision" className="section-image" /> */}
          </div>
        </div>

      </div>
    </section>
</>
  );
};

export default HeroSection;
