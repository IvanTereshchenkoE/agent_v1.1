import React from "react";

import "./AccountHeader.scss";
import { useNavigate } from "react-router-dom";

const AccountHeader = () => {
  const navigation = useNavigate();
  const handleNavigateUsers = () => {
    navigation("/users");
  };
  return (
    <ul className="module-header cr-position-radius p-top s-big accountPageHeader-bc headerBorder">
      <li className="left-content">
        <div className="left-inner">
          <div className="ellipsis-text module-title">
            <div className="account-header-title">
              <span
                className="account-header-user"
                onClick={handleNavigateUsers}
              >
                Users
              </span>
              <i className="icon bc-icon-above" />
              example@gmail.com
            </div>
          </div>
        </div>
      </li>
      <li className="right-content" />
    </ul>
  );
};

export { AccountHeader };
