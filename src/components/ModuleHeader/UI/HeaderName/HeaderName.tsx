import React from "react";

import "./HeaderName.scss";

interface IHeaderName {
  name?: string;
}

const HeaderName = ({ name }: IHeaderName) => {
  return (
    <div className="left-inner">
      <div className="ellipsis-text module-title" title="Users">
        {name}
      </div>
    </div>
  );
};

export { HeaderName };
