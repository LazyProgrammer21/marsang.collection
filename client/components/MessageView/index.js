import React, { useState, useEffect } from "react";
import {
  getMessages,
  postMessage,
  deleteMessage,
} from "../../services/messages";

import MessageForm from "./MessageForm";
import MessageList from "./MessageList";

const MessageView = () => {
  const [messages, setMessages] = useState([]);

  const handleGetMessages = async () => {
    const newMessages = await getMessages();
    setMessages(newMessages);
  };

  useEffect(() => {
    handleGetMessages();
  }, []);

  const handlePostMessage = async (newMessage) => {
    await postMessage(newMessage);
    handleGetMessages();
  };

  const handleDeleteMessage = async (message) => {
    await deleteMessage(message);
    handleGetMessages();
  };

  return (
    <div className="wrapper region-md flow-sm">
      <h1>Messages</h1>
      <MessageForm postMessage={handlePostMessage} />
      <MessageList messages={messages} deleteMessage={handleDeleteMessage} />
    </div>
  );
};
export default MessageView;
