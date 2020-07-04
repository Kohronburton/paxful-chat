import React from "react";
import profileImg from "../../images/profiles/douglas.png";
import "./trading.styles.css";

const SingleTrade: React.FC = () => {
  return (
    <div className="trading">
      <img src={profileImg} alt="Profile" />
      <div className="title-text">
        <span className="dot mr-2"></span>Daryl is buying
      </div>
      <div className="status paid mr-2">PAID</div>
      <div className="trading-message">
        Amazon Gift Card <br></br> <span> 77 USD (0.005425 BTC)</span>
      </div>
    </div>
  );
};

export default SingleTrade;
