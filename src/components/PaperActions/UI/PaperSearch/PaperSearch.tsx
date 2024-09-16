import React from "react";

import "./PaperSearch.scss";

const PaperSearch = () => {
  return (
    <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text search-holder">
      <div className="input-structure">
        <i className="icon bc-icon-search"></i>
        <label>
          <div className="input-element-relative">
            <input
              placeholder="Search"
              className="input-element placeholder"
              type="text"
              value=""
            />
          </div>
          <div className="input-element-back"></div>
        </label>
      </div>
    </div>
  );
};

export { PaperSearch };
