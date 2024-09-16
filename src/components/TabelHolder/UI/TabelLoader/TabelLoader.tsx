import React from "react";

import "./TabelLoader.scss";

const TabelLoader = () => {
  return (
    <div className="table-splash-loader">
      <div className="loader-holder p-absolute">
        <i className="icon bc-icon-loader s-small"></i>
      </div>
    </div>
  );
};

export { TabelLoader };
