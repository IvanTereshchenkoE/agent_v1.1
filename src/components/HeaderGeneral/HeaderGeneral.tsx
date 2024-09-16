import React from "react";

import "./HeaderGeneral.scss";
import { mockColumnsHeaderType } from "pages/networkusers/mockColums/mockColumnsHeader";

interface IHeaderGeneral {
  headerList: mockColumnsHeaderType[];
  headerListSecond?: any;
}

const HeaderGeneral = ({ headerList, headerListSecond }: IHeaderGeneral) => {
  return (
    <div className="ta-n-body ta-header pointer-events-none">
      {headerListSecond && (
        <div className="ta-row border-bottom">
          <div className="ta-cell a-square" />
          {headerListSecond.map((item: any) => {
            return (
              <div
                className="ta-cell ta-header-cell centered"
                data-id="4ca310db-9417-4a06-939d-152dc56b5b4f-0"
                title="User"
                style={{
                  left: "0px",
                  right: "0px",
                  width: `${item.size * 150}px`,
                }}
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
        </div>
      )}
      <div className="ta-row border-bottom">
        {headerList.map((item) => {
          return (
            <div
              className="ta-cell ta-header-cell cursor-pointer"
              data-id="41770b11-227e-c6c4-5121-4327d90479ec-productName"
              title="Products"
              style={{
                left: "0px",
                right: "0px",
                width: "150px",
              }}
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
      </div>
    </div>
  );
};

export { HeaderGeneral };
