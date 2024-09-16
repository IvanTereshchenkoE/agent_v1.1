import React from "react";

import "./Filters.scss";
import { Link, useLocation } from "react-router-dom";

const Filters = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      className={`nav-item ${currentPath === "/filters" ? "active" : ""}`}
      id="filters"
      to="/filters"
    >
      <span>Filters</span>
    </Link>
  );
};

export { Filters };
