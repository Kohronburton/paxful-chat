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
}

const ChatList: React.FC<Props> = ({
  buyerImage,
  chatMessage,
  paymentMethod,
  postiveRating,
  buyerName,
  negativeRating,
}) => {
  return (
    <Col md="5" className="chat-container mt-1">
      <ChartHeader
        paymentMethod={paymentMethod}
        buyerName={buyerName}
        postiveRating={postiveRating}
        negativeRating={negativeRating}
      />
      <div className="message-container">
        <Message buyerImage={buyerImage} chatMessage={chatMessage} />
      </div>
      {/* <Message /> */}
      <ChatInput />
    </Col>
  );
};

export default ChatList;
