import React from "react";

import "./FilterItem.scss";

interface IFilterItem {
  filterName: string;
}

const FilterItem = ({ filterName }: IFilterItem) => {
  return (
    <ul className="static-title-holder selected-filter-tag f-content-size">
      <li className="st-c">
        <div
          className="tag-c cr-full-radius a-light f-content-size s-big"
          style={{ cursor: "pointer" }}
        >
          <i className="icon bc-icon-clear-small" />
          <div className="tag-cp tag-cc ellipsis-text">{filterName}</div>
          <div className="tag-backdrop" />
        </div>
      </li>
    </ul>
  );
};

export { FilterItem };
