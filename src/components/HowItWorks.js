import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      title: "Browse the Marketplace",
      description:
        "Explore our wide selection of farm produce. Use filters to find specific products, such as organic or locally grown items.",
      img: "https://cdn-icons-png.flaticon.com/128/3081/3081559.png",
    },
    {
      title: "Place Your Order",
      description:
        "Add your desired products to your cart and proceed to checkout. Select your preferred delivery or pick-up option.",
      img: "https://cdn-icons-png.flaticon.com/128/1086/1086580.png",
    },
    {
      title: "Delivery or Pick-up",
      description:
        "Choose to have your order delivered directly to your doorstep or pick it up at a convenient location near you.",
      img: "https://cdn-icons-png.flaticon.com/128/809/809957.png",
    },
    {
      title: "Enjoy Fresh Farm Produce",
      description:
        "Receive your order and delight in the freshness of Farmers Marketplace goodness. Cook, bake, and create delicious meals with confidence.",
      img: "https://cdn-icons-png.flaticon.com/128/135/135695.png",
    },
  ];

  return (
    <div className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <img src={step.img} alt={step.title} />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
