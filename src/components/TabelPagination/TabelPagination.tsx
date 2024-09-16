import React from "react";

import "./TabelPagination.scss";

interface ITabelPagination {
  tabelCount: number;
}

const TabelPagination = ({ tabelCount }: ITabelPagination) => {
  return (
    <ul className="ta-pagination-holder">
      <li>
        <div className="pagination-drop">
          <div className="dropdown-holder f-content-size a-outline s-default">
            <div className="popover-track cursor-pointer">
              <div className="input-holder a-outline s-default id-start f-content-size cr-full-radius t-text filled">
                <div className="input-structure">
                  <label>
                    <div className="input-element-relative">
                      <input
                        placeholder="Select "
                        readOnly
                        className="input-element write-protected"
                        type="text"
                        size={1}
                        defaultValue={10}
                      />
                    </div>
                    <div className="fit-content-hack">
                      <div className="input-element">Select </div>
                    </div>
                    <div className="input-element-back" />
                  </label>
                  <i className="icon bc-icon-arrow-down" />
                </div>
              </div>
            </div>
          </div>
          <p>
            1-{tabelCount} of {tabelCount}
          </p>
        </div>
      </li>
      <li>
        <div className="pagination-holder">
          <button
            className="btn a-minimal s-default f-content-size c-default id-start cr-round c-icon"
            disabled
          >
            <i className="icon bc-icon-arrow-left-nav" />
          </button>
          <div className="divider type-vertical" />
          <button
            className="btn defaultCursor a-minimal s-default f-content-size c-default id-start cr-round active"
            data-key={1}
          >
            <span className="ellipsis-text">1</span>
          </button>
          <div className="divider type-vertical" />
          <button
            className="btn a-minimal s-default f-content-size c-default id-start cr-round c-icon"
            disabled
          >
            <i className="icon bc-icon-arrow-right-nav" />
          </button>
        </div>
      </li>
    </ul>
  );
};

export { TabelPagination };
