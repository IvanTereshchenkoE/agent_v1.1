import React from "react";

import "./DateRange.scss";

const DateRange = () => {
  return (
    <div className="col-v">
      <div className="mobile-date-ranges-holder">
        <div className="md-range-title">date</div>
        <div className="mobile-date-ranges-picker">
          <div className="input-holder a-outline s-default id-end f-full-width cr-full-radius t-date m-start-date filled">
            <div className="input-structure">
              <i className="icon bc-icon-calendar" />
              <label>
                <div className="input-element-relative">
                  <input
                    placeholder="Start date "
                    className="input-element"
                    type="date"
                    defaultValue="2023-12-01"
                  />
                  <div className="input-fake-placeholder hide">
                    <div className="ellipsis-text">Start date </div>
                  </div>
                </div>
                <div className="input-element-back">
                  <div className="input-swap-label">
                    <div className="input-swap">
                      <div className="input-swap-animate ellipsis-text">
                        <span className="ellipsis-text">From </span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <div className="input-holder a-outline s-default id-end f-full-width cr-full-radius t-date m-end-date filled">
            <div className="input-structure">
              <i className="icon bc-icon-calendar" />
              <label>
                <div className="input-element-relative">
                  <input
                    placeholder="End date "
                    className="input-element"
                    type="date"
                    defaultValue="2023-12-02"
                  />
                  <div className="input-fake-placeholder hide">
                    <div className="ellipsis-text">End date </div>
                  </div>
                </div>
                <div className="input-element-back">
                  <div className="input-swap-label">
                    <div className="input-swap">
                      <div className="input-swap-animate ellipsis-text">
                        <span className="ellipsis-text">To </span>
                      </div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DateRange };
