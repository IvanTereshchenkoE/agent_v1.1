import React from "react";

import "./TotalHeader.scss";
import { TotalWidgetModal } from "../TotalWidgetModal/TotalWidgetModal";

const TotalHeader = () => {
  return (
    <ul className="module-header cr-position-radius p-top s-big headerBorder">
      <li className="left-content">
        <div className="left-inner">
          <div className="ellipsis-text module-title" title="Totals">
            Totals
          </div>
        </div>
      </li>
      <li className="right-content custom-total-container">
        {/* <TotalWidgetModal /> */}
        <div className="dropdown-holder f-content-size a-light s-default mobile-view">
          <div className="popover-track cursor-pointer">
            <div className="input-holder a-light s-default id-start f-content-size cr-full-radius t-text filled">
              <div className="input-structure">
                <label>
                  <div className="input-element-relative">
                    <input
                      placeholder="All Products "
                      readOnly
                      className="input-element write-protected"
                      type="text"
                      size={1}
                      defaultValue="All Products"
                    />
                  </div>
                  <div className="fit-content-hack">
                    <div className="input-element">All Products </div>
                  </div>
                  <div className="input-element-back" />
                </label>
                <i className="icon bc-icon-arrow-down" />
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export { TotalHeader };
