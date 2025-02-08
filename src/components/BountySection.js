import React from "react";
import "./BountySection.css";

import apple from "../assets/apple.png";
import vegetables from "../assets/vegetable.png";
import meat from "../assets/cow.png";
import milk from "../assets/milk.png";
import organic from "../assets/organic.png";

const BountySection = () => {
  return (
    <section className="bounty-container">
      <h1>Discover the Bounty of the Land</h1>
      <p>
        At Farmers Marketplace, we bring the farm to your table. Our marketplace
        offers an extensive selection of farm produce, including:
      </p>

      {/* Bounty Card Layout */}
      <div className="bounty-grid">
        <div className="bounty-box">
          <img src={apple} alt="Fresh Fruits" />
          <h3>Fresh Fruits</h3>
          <p>Enjoy the juiciest apples, berries, citrus fruits, and more.</p>
        </div>

        <div className="bounty-box">
          <img src={vegetables} alt="Crisp Vegetables" />
          <h3>Crisp Vegetables</h3>
          <p>From leafy greens to vibrant peppers, we have it all.</p>
        </div>

        <div className="bounty-box">
          <img src={meat} alt="Farm-Raised Meats" />
          <h3>Farm-Raised Meats</h3>
          <p>Savor locally sourced beef, pork, poultry, and seafood.</p>
        </div>

        <div className="bounty-box">
          <img src={milk} alt="Dairy Delights" />
          <h3>Dairy Delights</h3>
          <p>Indulge in creamy cheeses, farm-fresh milk, and artisanal butter.</p>
        </div>

        <div className="bounty-box">
          <img src={organic} alt="Organic Options" />
          <h3>Organic Options</h3>
          <p>Discover certified organic produce, free from pesticides.</p>
        </div>
      </div>
    </section>
  );
};

export default BountySection;
