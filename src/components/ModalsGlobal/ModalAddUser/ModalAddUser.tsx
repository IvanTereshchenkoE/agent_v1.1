import React, { useState } from "react";

import "./ModalAddUser.scss";
import { useDispatch } from "react-redux";
import {
  setModalAddAgent,
  setModalAddPlayer,
  setModalAddUser,
} from "store/reducers/modalsReducer";

const ModalAddUser = () => {
  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("agent");

  const handleSelectUser = (item: string) => {
    setSelectedUser(item);
  };

  const handleCloseModal = () => {
    dispatch(setModalAddUser(false));
  };
  const handleGoNext = () => {
    if (selectedUser === "agent") {
      dispatch(setModalAddUser(false));
      dispatch(setModalAddAgent(true));
    } else if (selectedUser === "player") {
      dispatch(setModalAddUser(false));
      dispatch(setModalAddPlayer(true));
    }
  };
  return (
    <div
      className="modal-splash light-background a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default">
        <div className="modal-head">
          <div className="ellipsis-text">Add User</div>
        </div>
        <div className="modal-body">
          <div className="addUserWrapper-bc">
            <div className="cha-ra-group t-tab">
              <div
                className={`crs-holder lp-right la-start t-tab ${
                  selectedUser === "agent" ? "input-active" : ""
                } `}
                onClick={() => handleSelectUser("agent")}
              >
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="256d78fb-fbad-5e10-6051-7f31c2953cd5"
                    >
                      Agent
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="256d78fb-fbad-5e10-6051-7f31c2953cd5"
                      name="tab"
                      defaultChecked
                    />
                    <label
                      className="radio cr-element s-small active"
                      htmlFor="256d78fb-fbad-5e10-6051-7f31c2953cd5"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`crs-holder lp-right la-start t-tab ${
                  selectedUser === "player" ? "input-active" : ""
                }`}
                onClick={() => handleSelectUser("player")}
              >
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="6f367300-0743-f5e5-1493-cc5230f43b81"
                    >
                      player
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="6f367300-0743-f5e5-1493-cc5230f43b81"
                      name="tab"
                    />
                    <label
                      className="radio cr-element s-small"
                      htmlFor="6f367300-0743-f5e5-1493-cc5230f43b81"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn a-minimal s-medium f-default c-default id-start cr-round">
            <span className="ellipsis-text" onClick={handleCloseModal}>
              Cancel
            </span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            onClick={handleGoNext}
          >
            <span className="ellipsis-text">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalAddUser };
