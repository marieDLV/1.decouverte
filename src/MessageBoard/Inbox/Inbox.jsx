// Inbox.jsx
import React from 'react';
import SearchBar from './SearchBar';
import ChatList from './ChatList';

const Inbox = ({ conversations, onSelectConversation }) => {
  return (
    <div className="inbox_people">
      <div className="headind_srch">
        <div className="recent_heading">
          <h4>Recent</h4>
        </div>
        <SearchBar onSearch={(value) => console.log("Searching for", value)} />
      </div>
      <div className="inbox_chat">
        {conversations.map((chat) => (
          <ChatList
            key={chat.id}
            chat={chat}
            onClick={() => onSelectConversation(chat.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Inbox;