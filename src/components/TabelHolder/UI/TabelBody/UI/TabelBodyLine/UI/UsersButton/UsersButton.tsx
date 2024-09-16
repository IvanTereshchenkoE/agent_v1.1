import React from "react";

import "./UsersButton.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setModalAddNote,
  setModalTransferMoney,
} from "store/reducers/modalsReducer";

const UsersButton = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToUser = () => {
    navigate("/account/1600685/account");
  };
  const handleOpenModalNote = () => {
    dispatch(setModalAddNote(true));
  };
  const handleOpenModelMoney = () => {
    dispatch(setModalTransferMoney(true));
  };
  return (
    <div className="ta-action ta-a-2">
      <div className="ta-item ">
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          onClick={navigateToUser}
        >
          <i className="icon bc-icon-view-doc" />
        </button>
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          onClick={handleOpenModalNote}
        >
          <i className="icon bc-icon-note" />
        </button>
        <button
          className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
          onClick={handleOpenModelMoney}
        >
          <i className="icon bc-icon-transfer-bold" />
        </button>
      </div>
    </div>
  );
};

export { UsersButton };
