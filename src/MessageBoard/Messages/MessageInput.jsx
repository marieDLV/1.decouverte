// MessageInput.jsx
import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="type_msg">
      <div className="input_msg_write">
        <input
          type="text"
          className="write_msg"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="msg_send_btn" type="button" onClick={handleSend}>
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;