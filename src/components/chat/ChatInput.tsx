import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";
import "./chat.styles.css";

interface Props {
  handleMessageSend: (sender: string, chatMessage: string) => void;
}

const ChatInput: React.FC<Props> = ({ handleMessageSend }) => {
  const [chatMessage, setChatMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setChatMessage(value);
  };

  return (
    <div className="chat-input">
      <Form id="chat-form">
        <Input
          type="textarea"
          name="chat"
          placeholder="Type your message"
          className="mr-4"
          value={chatMessage}
          onChange={handleChange}
        />
        <Button
          type="button"
          color="success"
          size="sm"
          className="mr-2"
          onClick={() => {
            handleMessageSend("BUYER", chatMessage);
            setChatMessage("");
          }}
          disabled={chatMessage ? false : true}
        >
          Buyer
        </Button>
        <Button
          type="button"
          color="primary"
          size="sm"
          className="mr-2"
          onClick={() => {
            handleMessageSend("SELLER", chatMessage);
            setChatMessage("");
          }}
          disabled={chatMessage ? false : true}
        >
          Seller
        </Button>
      </Form>
    </div>
  );
};

export default ChatInput;
