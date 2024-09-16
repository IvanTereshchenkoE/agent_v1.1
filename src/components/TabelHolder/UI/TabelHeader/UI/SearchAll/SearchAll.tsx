import React from "react";

import "./SearchAll.scss";

const SearchAll = () => {
  return (
    <div
      className="ta-cell ta-header-cell"
      data-id="f9781fca-214c-e8ba-9626-42c6164b3ea7-multiSelect"
      style={{ left: "0px", right: "0px", width: "7rem" }}
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
              <div className="crs-holder lp-right la-start">
                <div className="label-holder">
                  <div className="crs-item crs-component">
                    <input
                      type="checkbox"
                      id="61fda2d0-69e4-f9bf-267d-42bb24bf8f29"
                      tabIndex={0}
                    />
                    <label
                      className="checkbox cr-element s-small"
                      htmlFor="61fda2d0-69e4-f9bf-267d-42bb24bf8f29"
                    />
                  </div>
                </div>
              </div>
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
};

export { SearchAll };
