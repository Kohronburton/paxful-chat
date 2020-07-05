import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import NavSelector from "../navselector/NavSelector";
import TradingList from "../Trading/TradingList";
import ChatList from "../chat/ChatList";
import Overview from "../overview/Overview";
import { TradesDataI } from "../../types";

const Trades: React.FC<{ tradeId: number }> = ({ tradeId }) => {
  const [currentId, setCurrentId] = useState(tradeId);
  const [selectedTrade, setSelectedTrade] = useState<TradesDataI | null>(null);

  const { data } = useSelector((state: RootStore) => state.trades);

  useEffect(() => {
    const selected = data.find((trade) => trade.id === currentId);
    if (selected) {
      setSelectedTrade(selected);
    }
    // eslint-disable-next-line
  }, [currentId]);

  const changeSelectedTrade = (id: number): void => {
    setCurrentId(id);
  };

  console.log(selectedTrade);
  console.log(currentId);

  return (
    <>
      <NavSelector />
      <Row className="">
        <TradingList
          changeSelectedTrade={changeSelectedTrade}
          tradeId={currentId}
        />
        {selectedTrade && (
          <ChatList
            paymentMethod={selectedTrade.paymentMethod}
            postiveRating={selectedTrade.postiveRating}
            negativeRating={selectedTrade.negativeRating}
            buyerImage={selectedTrade.image}
            chatMessage={selectedTrade.chatHistory}
            buyerName={selectedTrade.buyerName}
          />
        )}
        {selectedTrade && (
          <Overview
            negativeRating={selectedTrade.negativeRating}
            buyerName={selectedTrade.buyerName}
            postiveRating={selectedTrade.postiveRating}
            startedTrading={selectedTrade.startedTrading}
            buyerImage={selectedTrade.image}
            AmtBTC={selectedTrade.AmtBTC}
            AmtUSD={selectedTrade.AmtUSD}
            tradeHash={selectedTrade.tradeHash}
            tradingStatus={selectedTrade.tradingStatus}
            numberOfTrades={selectedTrade.numberOfTrades}
          />
        )}
      </Row>
    </>
  );
};

export default Trades;
