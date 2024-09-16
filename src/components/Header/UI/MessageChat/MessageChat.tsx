import React from "react";

import "./MessageChat.scss";
import { Link } from "react-router-dom";

const MessageChat = () => {
  return (
    <div className="headerNavIcon-bc">
      <div className="badge-holder size-default">
        <Link to="/messages/chats">
          <i className="icon bc-icon-message-affiliate" />
        </Link>
      </div>
    </div>
  );
};

export { MessageChat };
