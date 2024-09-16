import React from "react";

import "./ModalSettings.scss";
import { Appearance, ViewMode } from "./Ui";
import { setModalSettings } from "store/reducers/modalsReducer";
import { useDispatch } from "react-redux";

const ModalSettings = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalSettings(false));
  };

  return (
    <div
      className="modal-splash light-background a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-content-size">
        <div className="modal-head">
          <div className="ellipsis-text">Settings</div>
        </div>
        <div className="modal-body">
          <div className="settings-content">
            <Appearance />
            <ViewMode />
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="btn a-minimal s-medium f-default c-default id-start cr-round"
            onClick={handleCloseModal}
          >
            <span className="ellipsis-text">Cancel</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            onClick={handleCloseModal}
          >
            <span className="ellipsis-text">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalSettings };
