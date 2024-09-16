import React from "react";

import "./TagLine.scss";

interface ITagLine {
  name: string;
  widthHeader: number;
}

const TagLine = ({ name, widthHeader }: ITagLine) => {
  return (
    <div
      className="ta-cell"
      data-id="39c68620-32dc-7cf3-6077-d0abbdeb0d23-commissionTypeId"
      style={{ left: "0px", right: "0px", width: `${widthHeader}px` }}
    >
      <div className="ellipsis-text">
        <ul className="static-title-holder f-full-width">
          <li className="st-c">
            <div
              className="tag-c cr-smooth-radius a-light f-full-width s-medium pointer-events-none"
              style={{ cursor: "pointer" }}
            >
              <div className="tag-cp tag-cc ellipsis-text">{name}</div>
              <div className="tag-backdrop" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { TagLine };
