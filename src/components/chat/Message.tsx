import React from "react";
import BuyerImg from "../../images/profiles/douglas.png";
import Seller from "../../images/profiles/kim.jpeg";
import "./chat.styles.css";

const Message: React.FC = () => {
  return (
    <>
      <div className="mt-3 message-row other-message">
        <div className="message-content">
          <img src={BuyerImg} alt="Buyer" />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit
            soluta similique possimus
          </div>
          <div className="message-time">Apr 15</div>
        </div>
      </div>
      {/* Seller message */}
      <div className="d-flex justify-content-end">
        <div className="mt-3 message-row you-message">
          <div className="message-content">
            <div className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              fugit soluta similique possimus
            </div>

            <div className="message-time">Apr 15</div>
          </div>
        </div>
        <div className="ml-2 mt-3">
          <img src={Seller} alt="Buyer" className="seller-image" />
        </div>
      </div>

      <div className="mt-3 message-row other-message">
        <div className="message-content">
          <img src={BuyerImg} alt="Buyer" />
          <div className="message-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="message-time">Apr 15</div>
        </div>
      </div>
      {/* Seller message */}
      <div className="d-flex justify-content-end">
        <div className="mt-3 message-row you-message">
          <div className="message-content">
            <div className="message-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>

            <div className="message-time">Apr 15</div>
          </div>
        </div>
        <div className="ml-2 mt-3">
          <img src={Seller} alt="Buyer" className="seller-image" />
        </div>
      </div>
    </>
  );
};

export default Message;
