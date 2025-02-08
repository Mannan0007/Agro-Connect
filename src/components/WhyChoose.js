import React from "react";
import "./WhyChoose.css";

const benefits = [
  {
    number: "1",
    title: "Supporting Local Farmers",
    description:
      "By purchasing from our marketplace, you directly contribute to the growth and sustainability of local farming communities.",
  },
  {
    number: "2",
    title: "Freshness Guaranteed",
    description:
      "We prioritize freshness and quality. Our produce comes straight from the farm, ensuring you receive the tastiest and most nutritious products available.",
  },
  {
    number: "3",
    title: "Sustainable Practices",
    description:
      "We prioritize environmentally friendly farming practices. Many of our farmers utilize organic and regenerative techniques, promoting soil health and biodiversity.",
  },
  {
    number: "4",
    title: "Transparent Sourcing",
    description:
      "Know where your food comes from. Each product listing includes details about the farm, its practices, and the farmers behind the produce.",
  },
];

const WhyChoose = () => {
  return (
    <section className="why-choose-container">
      <h1>Why Choose Farmers Marketplace?</h1>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="number-badge">{benefit.number}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
