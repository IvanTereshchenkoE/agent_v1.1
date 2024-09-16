import React from "react";

import "./ReportsHeader.scss";
import { Link, useParams } from "react-router-dom";

interface IReportsHeader {
  headerList: {
    href: string;
    pageName: string;
  }[];
}

const ReportsHeader = ({ headerList }: IReportsHeader) => {
  const { reportsPage } = useParams();
  return (
    <div className="tabs-head">
      <div className="tabs-wrapper">
        <ul className="tabs-content type-box">
          {headerList.map((item) => {
            return (
              <li
                className={`${item.pageName === reportsPage ? "active" : ""}`}
              >
                <div className="ellipsis-text">
                  <Link to={item.href}>
                    {item.pageName.charAt(0).toUpperCase() +
                      item.pageName.slice(1)}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { ReportsHeader };
