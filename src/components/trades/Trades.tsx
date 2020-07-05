import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { RootStore } from "../../redux/store";
import NavSelector from "../navselector/NavSelector";
import TradingList from "../Trading/TradingList";
import ChatList from "../chat/ChatList";
import Overview from "../overview/Overview";
import { TradesDataI } from "../../types";
import {
  ChatMessageI,
  TradesDispatchTypes,
} from "../../redux/trades/tradesActionTypes";
import {
  createChatMessage,
  deleteTrade,
} from "../../redux/trades/tradesActions";
import moment from "moment";
import ConfirmDialog from "../common/ConfirmDialog";

const Trades: React.FC<{ tradeId: number }> = ({ tradeId }) => {
  const [currentId, setCurrentId] = useState(tradeId);
  const [listenToChange, setListenToChange] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState<TradesDataI | null>(null);

  const dispatch = useDispatch();

  const sendMessage = (message: ChatMessageI): TradesDispatchTypes =>
    dispatch(createChatMessage(message));

  const removeTrade = (id: number): TradesDispatchTypes =>
    dispatch(deleteTrade(id));

  const { data } = useSelector((state: RootStore) => state.trades);

  useEffect(() => {
    const selected = data.find((trade) => trade.id === currentId);
    if (selected) {
      setSelectedTrade(selected);
    }
    // eslint-disable-next-line
  }, [currentId, listenToChange]);

  const changeSelectedTrade = (id: number): void => {
    setCurrentId(id);
  };

  const openModal = (): void => {
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleDelete = (): void => {
    removeTrade(currentId);
    closeModal();
    setSelectedTrade(null);
    setListenToChange(!listenToChange);
  };

  const handleMessageSend = (sender: string, chatMessage: string): void => {
    if (!chatMessage) return;

    if (sender === "SELLER") {
      const message: ChatMessageI = {
        id: currentId,
        isBuyer: false,
        isSeller: true,
        chatMessage,
        date: moment(Date.now()).format("YYYY-MM-DD"),
      };
      sendMessage(message);
      setListenToChange(!listenToChange);
    }

    if (sender === "BUYER") {
      const message: ChatMessageI = {
        id: currentId,
        isBuyer: true,
        isSeller: false,
        chatMessage,
        date: moment(Date.now()).format("YYYY-MM-DD"),
      };
      sendMessage(message);
      setListenToChange(!listenToChange);
    }
  };

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
            handleMessageSend={handleMessageSend}
            openModal={openModal}
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
      <ConfirmDialog
        isOpen={isModalOpen}
        title="Confirm Message"
        message="Are you sure you want to delete this record?"
        toggle={closeModal}
        yesAction={handleDelete}
      />
    </>
  );
};

export default Trades;
