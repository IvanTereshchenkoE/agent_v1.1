import React from "react";

import "./PaperButton.scss";
import { useDispatch } from "react-redux";
import { setModalAddAgent } from "store/reducers/modalsReducer";

interface IPaperButton {
  name?: string;
}

const PaperButton = ({ name }: IPaperButton) => {
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(setModalAddAgent(true));
  };
  return (
    <button
      className="btn a-default s-default f-default c-primary id-start cr-round"
      onClick={handleModalOpen}
    >
      <i className="icon bc-icon-profit"></i>
      <span className="ellipsis-text">{name}</span>
    </button>
  );
};

export { PaperButton };
