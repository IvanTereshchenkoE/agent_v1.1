import React from "react";

import "./SearchButton.scss";

const SearchButton = () => {
  return (
    <div
      className="ta-cell"
      data-id="39c68620-32dc-7cf3-6077-d0abbdeb0d23-multiSelect"
      style={{ left: "0px", right: "0px", width: "7rem" }}
    >
      <div className="ellipsis-text">
        <div className="crs-holder lp-right la-start">
          <div className="label-holder">
            <div className="crs-item crs-component">
              <input
                type="checkbox"
                id="e21f8b13-a72d-edc2-7890-6871db697ec0"
                tabIndex={0}
              />
              <label
                className="checkbox cr-element s-small"
                htmlFor="e21f8b13-a72d-edc2-7890-6871db697ec0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SearchButton };
