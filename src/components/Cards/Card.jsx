import React from "react";
import styled from "styled-components";

const Card = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <p>{title}</p>
          </div>
          <div className="card-back">
            <p style={{ fontSize: "15px" }}>{description}</p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  .card {
    width: 300px;
    height: 200px;
    perspective: 1000px;
        font-size:20px;

  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
    font-size:20px;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: green;
    color: #fff;
    display: flex;
    align-items: center;
    // border: 10px solid #6A2C70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background-color: #F08A5D;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #F08A5D;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }`;

export default Card;
