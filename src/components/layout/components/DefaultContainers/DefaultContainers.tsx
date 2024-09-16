import React from "react";

import "./DefaultContainers.scss";
import { Navbar } from "components";

interface IDefaultContainers {
  loading: boolean;
  children: React.ReactNode;
}

const DefaultContainers = ({ loading, children }: IDefaultContainers) => {
  return (
    <main className="grand-body-inner">
      <Navbar />
      <div id="filtersAppend" className="body-head" />
      {loading && (
        <div className="loader-holder">
          <i className="icon bc-icon-loader s-small" />
        </div>
      )}
      {children}
    </main>
  );
};

export { DefaultContainers };
