import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { setMessageReadStatus } from "../../redux/trades/tradesActions";
import "./trading.styles.css";
import { TradesDispatchTypes } from "../../redux/trades/tradesActionTypes";

interface Props {
  profileImg: string;
  buyerName: string;
  paymentMethod: string;
  tradingStatus: string;
  AmtUSD: number;
  AmtBTC: number;
  isNewMessage: boolean;
  id: number;
  index: number;
  tradeId: number;
  changeSelectedTrade: (id: number) => void;
}

const SingleTrade: React.FC<Props> = ({
  isNewMessage,
  tradingStatus,
  profileImg,
  buyerName,
  paymentMethod,
  AmtBTC,
  AmtUSD,
  id,
  index,
  tradeId,
  changeSelectedTrade,
}) => {
  const [selected, setSelected] = useState(tradeId);

  const dispatch = useDispatch();
  const readMessage = (index: number): TradesDispatchTypes =>
    dispatch(setMessageReadStatus(index));

  useEffect(() => {
    setSelected(tradeId);
  }, [tradeId]);

  useEffect(() => {
    if (isNewMessage && selected === id) {
      readMessage(index);
    }
    // eslint-disable-next-line
  }, []);

  const notificationClass = classNames("mr-2", {
    "dot-new": isNewMessage,
    "dot-read": !isNewMessage,
  });

  const tradingStatusClass = classNames("status mr-2", {
    paid: tradingStatus === "PAID",
    "not-paid": tradingStatus === "NOT PAID",
  });

  const containerClass = classNames("trading border-bottom", {
    "current-select": selected === id,
  });

  const handleChanges = (id: number, index: number): void => {
    changeSelectedTrade(id);
    if (isNewMessage) {
      readMessage(index);
    }
    localStorage.setItem("currentRoute", id.toString());
  };

  return (
    <Link
      to={`/trades/${id}`}
      className={containerClass}
      onClick={() => handleChanges(id, index)}
    >
      <img src={profileImg} alt="Profile" />
      <div className="title-text">
        <span className={notificationClass}></span>
        {buyerName} is buying
      </div>
      <div className={tradingStatusClass}>{tradingStatus}</div>
      <div className="trading-message">
        {paymentMethod} <br></br>{" "}
        <span>
          {" "}
          {AmtUSD} USD ({AmtBTC} BTC)
        </span>
      </div>
    </Link>
  );
};

export default SingleTrade;
