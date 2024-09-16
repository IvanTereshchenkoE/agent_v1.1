import React, { useState } from "react";

import "./ModelTransferChose.scss";
import { useDispatch } from "react-redux";
import {
  setModalTransferChose,
  setModalTransferMoney,
} from "store/reducers/modalsReducer";

const ModelTransferChose = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setModalTransferChose(false));
  };

  const [transferTrack, setTransferTrack] = useState("agent");

  const handleSelectTransfer = (item: string) => {
    setTransferTrack(item);
  };

  const handleOpenMoney = () => {
    dispatch(setModalTransferChose(false));
    dispatch(setModalTransferMoney(true));
  };
  return (
    <div
      className="modal-splash light-background a-compact p-top"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default">
        <div className="modal-head">
          <div className="ellipsis-text">Transfer Money</div>
        </div>
        <div className="modal-body">
          <div className="transferMoneyModal-bc">
            <div className="cha-ra-group t-tab">
              <div
                className={`crs-holder lp-right la-start t-tab ${
                  transferTrack === "agent" ? "input-active" : ""
                } `}
                onClick={() => {
                  handleSelectTransfer("agent");
                }}
              >
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="a8903ad5-889b-ef2a-e640-58f646f5bad6"
                    >
                      To agent
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="a8903ad5-889b-ef2a-e640-58f646f5bad6"
                      name="tab"
                      defaultChecked
                    />
                    <label
                      className="radio cr-element s-small active"
                      htmlFor="a8903ad5-889b-ef2a-e640-58f646f5bad6"
                    />
                  </div>
                </div>
              </div>
              <div
                className={`crs-holder lp-right la-start t-tab ${
                  transferTrack === "player" ? "input-active" : ""
                }`}
                onClick={() => {
                  handleSelectTransfer("player");
                }}
              >
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="061509f9-ee01-e0b2-c295-71942250d697"
                    >
                      To player
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="061509f9-ee01-e0b2-c295-71942250d697"
                      name="tab"
                    />
                    <label
                      className="radio cr-element s-small"
                      htmlFor="061509f9-ee01-e0b2-c295-71942250d697"
                    />
                  </div>
                </div>
              </div>
            </div>
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
            onClick={handleOpenMoney}
          >
            <span className="ellipsis-text">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModelTransferChose };
