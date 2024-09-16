import React from "react";

import "./HeaderSettings.scss";
import { useDispatch } from "react-redux";
import { setModalFilters } from "store/reducers/modalsReducer";

const HeaderSettings = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(setModalFilters(true));
  };
  return (
    <button
      className="btn a-minimal s-default f-default c-primary id-start cr-round c-icon"
      onClick={handleOpenModal}
    >
      <i className="icon bc-icon-settings"></i>
    </button>
  );
};

export { HeaderSettings };
