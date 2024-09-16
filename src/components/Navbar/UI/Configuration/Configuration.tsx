import React from "react";

import "./Configuration.scss";
import { Link, useLocation } from "react-router-dom";

const Configuration = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      className={`nav-item ${currentPath === "/configuration" ? "active" : ""}`}
      id="configuration"
      to="/configuration"
    >
      <span>Configuration</span>
    </Link>
  );
};

export { Configuration };
