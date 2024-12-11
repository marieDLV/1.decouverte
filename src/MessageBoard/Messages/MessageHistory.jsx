// MessageHistory.jsx
import React from 'react';
import Message from './Message';

const MessageHistory = ({ messages }) => {
  return (
    <div className="msg_history">
      {messages.map((msg, index) => (
        <Message
          key={index}
          type={msg.type}
          text={msg.text}
          timestamp={msg.timestamp}
          profileImage={msg.profileImage}
        />
      ))}
    </div>
  );
};

export default MessageHistory;