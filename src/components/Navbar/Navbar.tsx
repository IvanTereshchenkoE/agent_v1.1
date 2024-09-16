import React from "react";

import "./Navbar.scss";
import {
  AgreeTree,
  Configuration,
  Dashboard,
  Filters,
  Network,
  Players,
  Reports,
} from "./UI";

const Navbar = () => {
  return (
    <div id="navbar" className="sectionHeader-bc">
      <ul className="bo-nav">
        <li />
        <li>
          <Dashboard />
          <Network />
          <AgreeTree />
          <Players />
          <Reports />
          <Filters />
          <Configuration />
        </li>
        <li />
      </ul>
    </div>
  );
};

export { Navbar };
