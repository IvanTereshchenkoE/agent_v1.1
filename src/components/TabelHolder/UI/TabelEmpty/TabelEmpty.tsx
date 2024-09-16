import React from "react";

import "./TabelEmpty.scss";

interface ITabelEmpty {
  loadData: () => void;
}

const TabelEmpty = ({ loadData }: ITabelEmpty) => {
  return (
    <div className="ta-nested-child-holder table-empty-holder">
      <div className="loadDataContainer">
        <button
          className="btn loadDataButton a-default s-default f-default c-primary id-start cr-round"
          onClick={loadData}
        >
          <span className="ellipsis-text">load data</span>
        </button>
        <span className="loadDataDescription">
          Press the Button to Load the Data
        </span>
      </div>
    </div>
  );
};

export { TabelEmpty };
