import React from "react";
import { Col } from "reactstrap";
import "./chat.styles.css";
import ChartHeader from "./ChartHeader";
import Message from "./Message";
import ChatInput from "./ChatInput";

const ChatList: React.FC = () => {
  return (
    <Col md="5" className="chat-container mt-1">
      <ChartHeader />
      <div className="message-container">
        <Message />
      </div>
      {/* <Message /> */}
      <ChatInput />
    </Col>
  );
};

export default ChatList;
