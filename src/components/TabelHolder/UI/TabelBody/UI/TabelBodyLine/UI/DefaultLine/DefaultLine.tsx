import React from "react";

import "./DefaultLine.scss";

interface IDefaultLine {
  name: string;
  widthHeader: number;
}

const DefaultLine = ({ name, widthHeader }: IDefaultLine) => {
  return (
    <div
      className="ta-cell"
      data-id="39c68620-32dc-7cf3-6077-d0abbdeb0d23-username"
      style={{ left: "0px", right: "0px", width: `${widthHeader}px` }}
    >
      <div className="ellipsis-text">{name}</div>
    </div>
  );
};

export { DefaultLine };
