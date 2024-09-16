import React from "react";

import "./PaperActions.scss";
import { PaperButton, PaperSearch } from "./UI";

interface IPaperActions {
  name?: string;
  isSearch?: boolean;
  isButton?: boolean;
}

const PaperActions = ({ isSearch, name, isButton }: IPaperActions) => {
  return (
    <ul className="paper-actions">
      <li className="paper-left-actions">{isSearch && <PaperSearch />}</li>
      <li className="paper-right-actions">
        {isButton && <PaperButton name={name} />}
      </li>
    </ul>
  );
};

export { PaperActions };
