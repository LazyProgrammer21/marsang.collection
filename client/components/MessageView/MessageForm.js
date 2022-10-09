import React, { useState } from "react";

const MessageForm = ({ postMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    postMessage(message);
  };

  const handleChange = ({ target }) => setMessage(target.value);

  return (
    <div>
      <input id="message" value={message} onChange={handleChange} />
      <button type="submit" className="primary-button" onClick={handleSubmit}>
        Send!
      </button>
    </div>
  );
};

export default MessageForm;
