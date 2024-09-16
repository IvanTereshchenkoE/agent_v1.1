import React from "react";

import "./TabelBody.scss";
import { mockColumnsUsersType } from "pages/networkusers/mockColums/mockColumnsUsers";
import { TabelBodyLine } from "./UI";
import { mockColumnsPlayersType } from "pages/activeplayers/mockColums/mockColumnsPlayers";

interface ITabelBody {
  tableList: mockColumnsUsersType[] | mockColumnsPlayersType[];
  widthHeader: number;
  searchAll?: boolean;
  page?: string;
}

const TabelBody = ({ tableList, widthHeader, searchAll, page }: ITabelBody) => {
  return (
    <div
      aria-label="grid"
      aria-readonly="true"
      className="ReactVirtualized__Grid ReactVirtualized__List"
      role="grid"
      tabIndex={0}
      style={{
        direction: "ltr",
        height: "auto",
        position: "relative",
        // width: "1231.58px",
        overflow: "hidden",
      }}
    >
      <div
        className="ReactVirtualized__Grid__innerScrollContainer"
        role="rowgroup"
        style={{
          width: "auto",
          height: `${tableList.length * 51}px`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {tableList.map((item, index) => {
          return (
            <TabelBodyLine
              index={index}
              lineInfo={item}
              widthHeader={widthHeader}
              searchAll={searchAll}
              page={page}
            />
          );
        })}
      </div>
    </div>
  );
};

export { TabelBody };
