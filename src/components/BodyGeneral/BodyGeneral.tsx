import React, { useEffect, useState } from "react";

import "./BodyGeneral.scss";
import { LoadTabel, NoResultTabel } from "./UI";
import { Loader } from "components";

const BodyGeneral = () => {
  const [loading, setLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoaded = () => {
    setLoading(true);
    setTimeout(() => {
      setIsLoaded(true);
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="ta-body">
      {!isLoaded && <LoadTabel handleLoaded={handleLoaded} />}
      {loading && <Loader />}
      {isLoaded && <NoResultTabel />}
    </div>
  );
};

export { BodyGeneral };
