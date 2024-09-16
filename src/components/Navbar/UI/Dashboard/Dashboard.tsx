import React from "react";

import "./Dashboard.scss";
import { Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Link
      className={`nav-item ${currentPath === "/dashboard" ? "active" : ""}`}
      id="dashboard"
      to="/dashboard"
    >
      <span>Dashboard</span>
    </Link>
  );
};

export { Dashboard };
