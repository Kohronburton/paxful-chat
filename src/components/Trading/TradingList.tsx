import React from "react";
import { Col } from "reactstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import "./trading.styles.css";
import SingleTrade from "./SingleTrade";

interface Props {
  tradeId: number;
  changeSelectedTrade: (id: number) => void;
}

const TradingList: React.FC<Props> = ({ changeSelectedTrade, tradeId }) => {
  const { data } = useSelector((state: RootStore) => state.trades);
  return (
    <>
      {data.length ? (
        <Col md="3" className="trading-container border-right">
          {data.map((trade, index) => (
            <SingleTrade
              key={trade.id}
              id={trade.id}
              tradeId={tradeId}
              index={index}
              profileImg={trade.image}
              tradingStatus={trade.tradingStatus}
              AmtBTC={trade.AmtBTC}
              AmtUSD={trade.AmtUSD}
              buyerName={trade.buyerName}
              isNewMessage={trade.isNewMessage}
              paymentMethod={trade.paymentMethod}
              changeSelectedTrade={changeSelectedTrade}
            />
          ))}
        </Col>
      ) : (
        <h3 className="container mt-5">Sorry you don't have trade currently</h3>
      )}
    </>
  );
};

export default TradingList;
