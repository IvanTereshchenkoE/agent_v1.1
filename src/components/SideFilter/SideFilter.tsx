import React, { useState } from "react";

import "./SideFilter.scss";
import { HolderClose } from "./components";

const SideFilter = () => {
  const [filterOpenedStatus, setFilterOpenedStatus] = useState(false);
  return (
    <div
      className={`holder filterWrapper-bc holder-left ${
        filterOpenedStatus ? "pinned opened" : ""
      } `}
    >
      <HolderClose setFilterOpenedStatus={setFilterOpenedStatus} />
    </div>
  );
};

export { SideFilter };
