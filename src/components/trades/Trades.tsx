import React from "react";
import { Row } from "reactstrap";
import NavSelector from "../navselector/NavSelector";
import TradingList from "../Trading/TradingList";
import ChatList from "../chat/ChatList";
import Overview from "../overview/Overview";

const Trades: React.FC = () => {
  return (
    <>
      <NavSelector />
      <Row className="">
        <TradingList />
        <ChatList />
        <Overview />
      </Row>
    </>
  );
};

export default Trades;
