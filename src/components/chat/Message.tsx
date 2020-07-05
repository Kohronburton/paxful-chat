import React from "react";
import "./chat.styles.css";
import { ChatHistoryI } from "../../types";
import moment from "moment";

interface Props {
  buyerImage: string;
  chatMessage: ChatHistoryI[];
}

const Message: React.FC<Props> = ({ chatMessage, buyerImage }) => {
  return (
    <>
      {chatMessage.map((chat, index) => {
        if (chat.isBuyer) {
          return (
            <div className="mt-3 message-row other-message" key={index}>
              <div className="message-content">
                <img src={buyerImage} alt="Buyer" />
                <div className="message-text">{chat.chatMessage}</div>
                <div className="message-time">
                  {moment(chat.date).format("MMM Do")}
                </div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="mt-3 mr-2 message-row you-message" key={index}>
              <div className="message-content">
                <div className="message-text">{chat.chatMessage}</div>

                <div className="message-time">
                  {" "}
                  {moment(chat.date).format("MMM Do")}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};

export default Message;
