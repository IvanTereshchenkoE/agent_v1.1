import React from "react";

import "./AgreeTree.scss";
import { Link, useLocation } from "react-router-dom";

const AgreeTree = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      className={`nav-item ${currentPath === "/agentTree" ? "active" : ""}`}
      id="agentTree"
      to="/agentTree"
    >
      <span>Agent Tree</span>
    </Link>
  );
};

export { AgreeTree };
