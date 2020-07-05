import React from "react";
import { Col } from "reactstrap";
import "./chat.styles.css";
import ChartHeader from "./ChartHeader";
import Message from "./Message";
import ChatInput from "./ChatInput";
import { ChatHistoryI } from "../../types";

interface Props {
  paymentMethod: string;
  postiveRating: number;
  negativeRating: number;
  buyerName: string;
  buyerImage: string;
  chatMessage: ChatHistoryI[];
  openModal: () => void;
  handleMessageSend: (sender: string, chatMessage: string) => void;
}

const ChatList: React.FC<Props> = ({
  buyerImage,
  chatMessage,
  paymentMethod,
  postiveRating,
  buyerName,
  negativeRating,
  openModal,
  handleMessageSend,
}) => {
  return (
    <Col md="5" className="chat-container mt-1">
      <ChartHeader
        paymentMethod={paymentMethod}
        buyerName={buyerName}
        postiveRating={postiveRating}
        negativeRating={negativeRating}
        openModal={openModal}
      />
      <div className="message-container">
        <Message buyerImage={buyerImage} chatMessage={chatMessage} />
      </div>

      <ChatInput handleMessageSend={handleMessageSend} />
    </Col>
  );
};

export default ChatList;
