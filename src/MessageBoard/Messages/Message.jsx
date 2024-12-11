// Message.jsx
import React from 'react';

const Message = ({ type, text, timestamp, profileImage }) => {
  const isIncoming = type === 'incoming';

  return isIncoming ? (
    <div className="incoming_msg">
      <div className="incoming_msg_img">
        <img src={profileImage} alt="profile" />
      </div>
      <div className="received_msg">
        <div className="received_withd_msg">
          <p>{text}</p>
          <span className="time_date">{timestamp}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="outgoing_msg">
      <div className="sent_msg">
        <p>{text}</p>
        <span className="time_date">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;