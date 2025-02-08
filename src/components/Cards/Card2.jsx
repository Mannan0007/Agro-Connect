import React from "react";
import styled from "styled-components";

const Card2 = ({ title, buttonText, color, onClick }) => {
  return (
    <StyledWrapper>
      <div className="cards">
        <div className="card" style={{ backgroundColor: color }}>
          <p className="tip">{title}</p>
          <button onClick={onClick}>{buttonText}</button>
        </div>
      </div>  
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: row; /* Side by side */
    
    row-gap: 35px;
  }

  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 120px;
    width: 290px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
    padding: 15px;
  }

  .card p.tip {
    font-size: 1em;
    font-weight: 700;
  }

  .card button {
    margin-top: 10px;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background: white;
    color: black;
    font-weight: bold;
    transition: 300ms;
  }

  .card button:hover {
    background: lightgray;
  }

  .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(5px);
    transform: scale(0.9, 0.9);
  }
`;

export default Card2;
