import React from "react";
import { Button, Form, Input } from "reactstrap";
import "./chat.styles.css";

const ChatInput = () => {
  return (
    <div className="chat-input">
      <Form id="chat-form">
        <Input
          type="textarea"
          name="chat"
          placeholder="Type your message"
          className="mr-4"
        />
        <Button color="success" size="sm" className="mr-2">
          SEND
        </Button>
      </Form>
    </div>
  );
};

export default ChatInput;
