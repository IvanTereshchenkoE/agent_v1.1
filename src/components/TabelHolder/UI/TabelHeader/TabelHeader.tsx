import React, { useEffect, useState } from "react";

import "./TabelHeader.scss";
import { mockColumnsHeaderType } from "pages/networkusers/mockColums/mockColumnsHeader";
import { SearchAll } from "./UI";
import { useWindow } from "hooks";

interface ITabelHeader {
  headerList: mockColumnsHeaderType[];
  searchAll?: boolean;
  widthHeader: number
}

const TabelHeader = ({ headerList, searchAll, widthHeader }: ITabelHeader) => {
  console.log(widthHeader)
  return (
    <div className="ta-n-body ta-header pointer-events-none">
      <div className="ta-row border-bottom">
        {searchAll && <SearchAll />}

        {headerList.map((item) => {
          return (
            <div
              className="ta-cell ta-header-cell  cursor-pointer"
              style={{ left: "0px", right: "0px", width: `${widthHeader}px` }}
              draggable="true"
            >
              <div className="ta-cell-block">
                <div className="ta-cell-header-tittle ta-cell-header-item">
                  <div
                    className="sticky-viewport-checker"
                    style={{ width: "1px", left: "-1px" }}
                  />
                  <div className="table-heading">
                    <div className="table-heading-text ellipsis-text">
                      {item.name}
                    </div>
                    {item.filtred && <div className="ta-filter-icon" />}
                  </div>
                  <div>
                    <i className="icon cell-options cursor-pointer bc-icon-drag" />
                  </div>
                </div>
              </div>
              <div className="th-divider-holder">
                <i className="th-divider" />
              </div>
              <div
                className="sticky-viewport-checker"
                style={{ width: "1px", right: "-1px" }}
              />
            </div>
          );
        })}

        <div className="ta-cell right-actions-holder a-square" />
      </div>
    </div>
  );
};

export { TabelHeader };
