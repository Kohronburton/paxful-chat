import React from "react";
import { Col, Button, Row } from "reactstrap";
import BuyerImg from "../../images/profiles/douglas.png";
import "./overview.styles.css";

const Overview: React.FC = () => {
  return (
    <Col md="3" className="overview-container mt-3">
      <div className="text-center container">
        <div className="">
          <h6>You are trading with Channaar</h6>
          <span className="selected">Started 23 minutes ago</span>
        </div>
        <div className="mt-5">
          <Button className="rounded-pill" color="success">
            Release bitcoins
          </Button>
        </div>
        <Row className="mt-5">
          <Col md="4" className="border-bottom border-right">
            <img src={BuyerImg} alt="Buyer" />
            <br></br>
            <span className="selected">
              <span className="rating-postive">+37</span> /{" "}
              <span className="rating-neg">-1</span>{" "}
            </span>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3"># OF TRADES</h6>
            <p>4</p>
          </Col>
          <Col md="4" className="border-bottom border-right">
            <h6 className="overview-text mt-3">TRADE STATUS</h6>
            <p className="overview-text paid">PAID</p>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3">TRADE HASH</h6>
            <p className="selected">40egth5</p>
          </Col>
          <Col md="4" className="border-bottom border-right">
            <h6 className="overview-text mt-3">AMOUNT USD</h6>
            <p className="selected">25.00</p>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3">AMOUNT BTC</h6>
            <p className="selected">0.0023456</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Overview;
