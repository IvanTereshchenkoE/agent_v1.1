import React from "react";

import "./Reports.scss";
import { useMouseHover } from "hooks";
import { Link, useLocation } from "react-router-dom";

const Reports = () => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = useMouseHover();
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      className="custom-container custom-reports-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        id="reports"
        className={`nav-item cursor-pointer ${
          currentPath === "/reports/productsReport/products" ||
          currentPath === "/reports/transactionReport/transactions" ||
          currentPath === "/reports/betsReport" ||
          currentPath === "/reports/subAgentsStatistics" ||
          currentPath === "/reports/referralReport" ||
          currentPath === "/reports/activityReportByAffiliates" ||
          currentPath === "/reports/productsReport/players" ||
          currentPath === "/reports/productsReport/users" 
            ? "active"
            : ""
        }`}
      >
        <span>Reports</span>
        <i className="icon bc-icon-arrow-down" />
      </div>
      {isHovered ? (
        <div className="modal-container popover-positioner cr-full-radius">
          <ul className="popover-content">
            <li className="popover-body">
              <div className="bo-submenu">
                <Link
                  className={`${
                    currentPath === "/reports/productsReport/products" ||
                    currentPath === "/reports/productsReport/players" || 
                    currentPath === "/reports/productsReport/users" 
                      ? "active"
                      : ""
                  }`}
                  to="/reports/productsReport/products"
                >
                  <p>General</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/reports/transactionReport/transactions"
                      ? "active"
                      : ""
                  }`}
                  to="/reports/transactionReport/transactions"
                >
                  <p>Transaction</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/reports/betsReport" ? "active" : ""
                  }`}
                  to="/reports/betsReport"
                >
                  <p>Sports Bet</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/reports/subAgentsStatistics"
                      ? "active"
                      : ""
                  }`}
                  to="/reports/subAgentsStatistics"
                >
                  <p>Sub Agent</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/reports/referralReport" ? "active" : ""
                  }`}
                  to="/reports/referralReport"
                >
                  <p>Referral</p>
                </Link>
                <Link
                  className={`${
                    currentPath === "/reports/activityReportByAffiliates"
                      ? "active"
                      : ""
                  }`}
                  to="/reports/activityReportByAffiliates"
                >
                  <p>Activities By Users</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export { Reports };
