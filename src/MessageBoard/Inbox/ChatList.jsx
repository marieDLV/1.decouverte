// ChatList.jsx
import React from 'react';

const ChatList = ({ chat, onClick, isActive }) => {
  return (
    <div
      className={`chat_list ${isActive ? 'active_chat' : ''}`}
      onClick={onClick}
    >
      <div className="chat_people">
        <div className="chat_img">
          <img src={chat.profileImage} alt={chat.name} />
        </div>
        <div className="chat_ib">
          <h5>
            {chat.name} <span className="chat_date">{chat.date}</span>
          </h5>
          <p>{chat.preview}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;