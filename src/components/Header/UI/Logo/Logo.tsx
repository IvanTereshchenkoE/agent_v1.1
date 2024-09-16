import React from "react";

import "./Logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <li>
      <Link to="/">
        <h3 className="logoLabel-bc">casino-luky7.com</h3>
      </Link>
      <div className="divider type-vertical" />
    </li>
  );
};

export { Logo };
