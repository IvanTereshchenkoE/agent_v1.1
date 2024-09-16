import React from "react";

import "./LoadTabel.scss";

interface ILoadTabel {
  handleLoaded: () => void;
}

const LoadTabel = ({ handleLoaded }: ILoadTabel) => {
  return (
    <div className="ta-nested-child-holder table-empty-holder">
      <div className="loadDataContainer">
        <button
          className="btn loadDataButton a-default s-default f-default c-primary id-start cr-round"
          onClick={handleLoaded}
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

export { LoadTabel };
