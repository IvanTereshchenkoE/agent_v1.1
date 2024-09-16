import React from "react";

import "./HeaderExport.scss";

const HeaderExport = () => {
  return (
    <div className="export-holder cursor-pointer">
      <p>Export</p>
      <div className="export-icon-holder">
        <i className="icon bc-icon-arrow-down"></i>
      </div>
    </div>
  );
};

export { HeaderExport };
