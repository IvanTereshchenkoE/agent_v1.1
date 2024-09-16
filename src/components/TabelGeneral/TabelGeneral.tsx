import React from "react";

import "./TabelGeneral.scss";
import { mockColumnsHeaderType } from "pages/networkusers/mockColums/mockColumnsHeader";
import { BodyGeneral, HeaderGeneral } from "components";

interface ITabelGeneral {
  headerList: mockColumnsHeaderType[];
  headerListSecond?: any;
}

const TabelGeneral = ({ headerList, headerListSecond }: ITabelGeneral) => {
  return (
    <div className="table-holder content-empty">
      <div
        className="scroll-holder s-medium"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: "0px",
          maxHeight: "5000px",
        }}
      >
        <div
          className="scroll-content"
          style={{
            position: "relative",
            overflow: "scroll",
            minHeight: "16px",
            maxHeight: "5016px",
          }}
        >
          <HeaderGeneral
            headerList={headerList}
            headerListSecond={headerListSecond}
          />
          <BodyGeneral />
        </div>
      </div>
    </div>
  );
};

export { TabelGeneral };
