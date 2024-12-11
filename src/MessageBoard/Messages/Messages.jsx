// Messages.jsx
import React from 'react';
import MessageHistory from './MessageHistory';
import MessageInput from './MessageInput';

const Messages = ({ messages, onSendMessage }) => {
  return (
    <div className="mesgs">
      <MessageHistory messages={messages} />
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};

export default Messages;