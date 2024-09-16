import React from "react";

import "./AccountPages.scss";
import { AccountPage, CommissionPage, LogsPage } from "./pages";
import { Link, useParams } from "react-router-dom";

const AccountPages = () => {
  const { accountId, page } = useParams();
  return (
    <div className="accountPageWrapper-bc">
      <div className="tabs-holder horizontal">
        <div className="tabs-head">
          <div className="tabs-wrapper">
            <ul className="tabs-content type-box">
              <li className={`${page === "account" ? "active" : ""}`}>
                <div className="ellipsis-text">
                  <Link to={`/account/${accountId}/account`}>Account</Link>
                </div>
              </li>
              <li className={`${page === "commission" ? "active" : ""}`}>
                <div className="ellipsis-text">
                  <Link to={`/account/${accountId}/commission`}>
                    Commission Plan
                  </Link>
                </div>
              </li>
              <li className={`${page === "logs" ? "active" : ""}`}>
                <div className="ellipsis-text">
                  <Link to={`/account/${accountId}/logs/commission-plan`}>
                    Logs
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="tabs-content-holder c-type-box"
          style={{ padding: "1.8rem" }}
        >
          {page === "account" && <AccountPage />}
          {page === "commission" && <CommissionPage />}
          {page === "logs" && <LogsPage />}
        </div>
      </div>
    </div>
  );
};

export { AccountPages };
