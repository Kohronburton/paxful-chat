import React from "react";
import { Col, Button, Row } from "reactstrap";
import moment from "moment";
import classNames from "classnames";
import "./overview.styles.css";

interface Props {
  postiveRating: number;
  negativeRating: number;
  buyerName: string;
  buyerImage: string;
  tradeHash: string;
  AmtUSD: number;
  AmtBTC: number;
  numberOfTrades: number;
  tradingStatus: string;
  startedTrading: string;
}

const Overview: React.FC<Props> = ({
  buyerImage,
  buyerName,
  postiveRating,
  negativeRating,
  tradeHash,
  tradingStatus,
  AmtBTC,
  AmtUSD,
  numberOfTrades,
  startedTrading,
}) => {
  const tradingStatusClass = classNames("overview-text", {
    paid: tradingStatus === "PAID",
    "not-paid": tradingStatus === "NOT PAID",
  });

  return (
    <Col md="3" className="overview-container mt-3">
      <div className="text-center container">
        <div className="">
          <h6>You are trading with {buyerName}</h6>
          <span className="selected">{`Started ${moment(
            startedTrading
          ).fromNow()}`}</span>
        </div>
        <div className="mt-5">
          <Button className="rounded-pill" color="success">
            Release bitcoins
          </Button>
        </div>
        <Row className="mt-5">
          <Col md="4" className="border-bottom border-right">
            <img src={buyerImage} alt="Buyer" />
            <br></br>
            <span className="selected">
              <span className="rating-postive">+{postiveRating}</span> /{" "}
              <span className="rating-neg">{negativeRating}</span>{" "}
            </span>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3"># OF TRADES</h6>
            <p>{numberOfTrades}</p>
          </Col>
          <Col md="4" className="border-bottom border-right">
            <h6 className="overview-text mt-3">TRADE STATUS</h6>
            <p className={tradingStatusClass}>{tradingStatus}</p>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3">TRADE HASH</h6>
            <p className="selected">{tradeHash}</p>
          </Col>
          <Col md="4" className="border-bottom border-right">
            <h6 className="overview-text mt-3">AMOUNT USD</h6>
            <p className="selected">{AmtUSD}</p>
          </Col>
          <Col md="4" className="border-bottom">
            <h6 className="overview-text mt-3">AMOUNT BTC</h6>
            <p className="selected">{AmtBTC}</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default Overview;
