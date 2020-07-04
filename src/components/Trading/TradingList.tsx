import React from "react";
import { Col } from "reactstrap";
import "./trading.styles.css";
import SingleTrade from "./SingleTrade";

const TradingList: React.FC = () => {
  return (
    <Col md="3" className="trading-container">
      <SingleTrade />
      <SingleTrade />
      <SingleTrade />
    </Col>
  );
};

export default TradingList;
