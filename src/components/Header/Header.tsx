import React from "react";

import "./Header.scss";
import {
  AddUser,
  Balance,
  Credit,
  CreditLine,
  Logo,
  MessageChat,
  Notification,
  TotalAvailable,
  TransferMoney,
  UserHeader,
} from "./UI";

const Header = () => {
  return (
    <header>
      <ul>
        <Logo />
        <li>
          <Credit />
          <CreditLine />
          <Balance />
          <TotalAvailable />
          <div className="divider type-vertical" />
          <AddUser />
          <TransferMoney />
          <MessageChat />
          <Notification />
          <UserHeader />  
        </li>
      </ul>
    </header>
  );
};

export { Header };
