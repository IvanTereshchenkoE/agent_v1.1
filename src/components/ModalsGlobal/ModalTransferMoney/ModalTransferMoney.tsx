import React from "react";

import "./ModalTransferMoney.scss";
import { useDispatch } from "react-redux";
import {
  setModalTransferChose,
  setModalTransferMoney,
} from "store/reducers/modalsReducer";

const ModalTransferMoney = () => {
  const dispatch = useDispatch();
  const handleGoBack = () => {
    dispatch(setModalTransferMoney(false));
    dispatch(setModalTransferChose(true));
  };
  const handleClose = () => {
    dispatch(setModalTransferMoney(false));
  };
  return (
    <div
      className="modal-splash light-background a-compact p-top transferModalWrapper-bc"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-default" style={{ width: "580px" }}>
        <div className="modal-head">
          <div className="ellipsis-text">
            <button
              className="btn icon-appearance-compact a-minimal s-default f-default c-default id-start cr-round c-icon"
              onClick={handleGoBack}
            >
              <i className="icon bc-icon-arrow-back" />
            </button>
            Transfer Money
          </div>
        </div>
        <div className="modal-body">
          <div className="transferMoneyModalRadioBtn-bc">
            <div className="cha-ra-group t-tab">
              <div className="crs-holder lp-right la-start t-tab input-active">
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="e964b402-0494-4d78-2372-29792adb2af4"
                    >
                      Deposit
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="e964b402-0494-4d78-2372-29792adb2af4"
                      name="tab"
                      defaultChecked
                    />
                    <label
                      className="radio cr-element s-small active"
                      htmlFor="e964b402-0494-4d78-2372-29792adb2af4"
                    />
                  </div>
                </div>
              </div>
              <div className="crs-holder lp-right la-start t-tab">
                <div className="label-holder has-label">
                  <div className="crs-item crs-label">
                    <label
                      className="ellipsis-text"
                      htmlFor="05c7bf51-e8f7-c563-fb97-87d3649fc640"
                    >
                      Withdraw
                    </label>
                  </div>
                  <div className="crs-item crs-component">
                    <input
                      type="radio"
                      id="05c7bf51-e8f7-c563-fb97-87d3649fc640"
                      name="tab"
                    />
                    <label
                      className="radio cr-element s-small"
                      htmlFor="05c7bf51-e8f7-c563-fb97-87d3649fc640"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="walletContainer">
            <div className="walletColumn">
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(255, 220, 83)" }} />
                  <span className="ellipsis-text">my balance</span>
                </li>
                <li>
                  <span className="ellipsis-text">-</span>
                </li>
              </ul>
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(255, 220, 83)" }} />
                  <span className="ellipsis-text">my credit</span>
                </li>
                <li>
                  <span className="ellipsis-text">-</span>
                </li>
              </ul>
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(255, 220, 83)" }} />
                  <span className="ellipsis-text">my-total-available</span>
                </li>
                <li>
                  <span className="ellipsis-text" />
                </li>
              </ul>
            </div>
            <div className="walletColumn">
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(125, 198, 129)" }} />
                  <span className="ellipsis-text">agent balance</span>
                </li>
                <li>
                  <span className="ellipsis-text">-</span>
                </li>
              </ul>
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(125, 198, 129)" }} />
                  <span className="ellipsis-text">agent credit</span>
                </li>
                <li>
                  <span className="ellipsis-text">-</span>
                </li>
              </ul>
              <ul className="widget widget-holder t-minimal s-medium shadow border">
                <li>
                  <i style={{ background: "rgb(125, 198, 129)" }} />
                  <span className="ellipsis-text">Agent total available</span>
                </li>
                <li>
                  <span className="ellipsis-text" />
                </li>
              </ul>
            </div>
          </div>
          <form noValidate className="transferMoneyFormWrapper-bc">
            <span className="transferMoneyLine-bc" />
            <div className="transferMoneyFormRow-bc">
              <div className="transferMoneyFormInput-bc">
                <div className="asyncFormField">
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            required
                            placeholder="Agent *"
                            className="input-element placeholder"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Agent *</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                      <i className="icon bc-icon-arrow-down" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="transferMoneyFormInput-bc">
                <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                  <div className="input-structure">
                    <label>
                      <div className="input-element-relative">
                        <input
                          required
                          placeholder="Amount *"
                          className="input-element placeholder"
                          name="d93a5e9b-a848-53c9-5705-e1fbd7c0d812"
                          type="text"
                        />
                      </div>
                      <div className="input-element-back">
                        <div className="input-swap-label">
                          <div className="input-swap">
                            <div className="input-swap-animate ellipsis-text hide">
                              <span className="ellipsis-text">amount *</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div className="transferMoneyFormInput-bc">
                <div className="dropdown-holder f-full-width a-outline s-big pointer-events-none-dropdown">
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text disabled filled">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            required
                            disabled
                            placeholder="Currency *"
                            readOnly
                            className="input-element write-protected"
                            type="text"
                            defaultValue="EUR"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text">
                                <span className="ellipsis-text">
                                  Currency *
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                      <i className="icon cursor-pointer bc-icon-clear disabled" />
                      <i className="icon bc-icon-arrow-down" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transferMoneyFormRow-bc">
              <div className="cha-ra-group t-default">
                <div className="crs-holder lp-right la-start t-default input-active">
                  <div className="label-holder has-label">
                    <div className="crs-item crs-label">
                      <label
                        className="ellipsis-text"
                        htmlFor="22608344-ce21-4da7-cec3-f85b78b0cfe3"
                      >
                        REAL
                      </label>
                    </div>
                    <div className="crs-item crs-component">
                      <input
                        type="radio"
                        id="22608344-ce21-4da7-cec3-f85b78b0cfe3"
                        name="controlled"
                        defaultChecked
                      />
                      <label
                        className="radio cr-element s-small active"
                        htmlFor="22608344-ce21-4da7-cec3-f85b78b0cfe3"
                      />
                    </div>
                  </div>
                  <div className="input-description">
                    select "Real", if you give/take the cash at the moment of
                    transaction.
                  </div>
                </div>
                <div className="crs-holder lp-right la-start t-default">
                  <div className="label-holder has-label">
                    <div className="crs-item crs-label">
                      <label
                        className="ellipsis-text"
                        htmlFor="b48963af-a168-e609-be22-6204c74ee7c5"
                      >
                        CREDIT
                      </label>
                    </div>
                    <div className="crs-item crs-component">
                      <input
                        type="radio"
                        id="b48963af-a168-e609-be22-6204c74ee7c5"
                        name="controlled"
                      />
                      <label
                        className="radio cr-element s-small"
                        htmlFor="b48963af-a168-e609-be22-6204c74ee7c5"
                      />
                    </div>
                  </div>
                  <div className="input-description">
                    select "Credit", if you give/take cash later then the
                    transaction day.
                  </div>
                </div>
              </div>
            </div>
            <div className="transferMoneyFormRow-bc">
              <h4 className="transferMoneyFormLabel-bc">Your note</h4>
              <div className="transferMoneyFormInput-bc">
                <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-textarea">
                  <div className="input-structure">
                    <label>
                      <div className="input-element-relative">
                        <textarea
                          placeholder="Comment "
                          className="input-element placeholder textarea-element"
                          name="07de302f-e553-3b45-382b-ea1e85d6a753"
                          defaultValue={""}
                        />
                      </div>
                      <div className="input-element-back">
                        <div className="input-swap-label">
                          <div className="input-swap">
                            <div className="input-swap-animate ellipsis-text hide">
                              <span className="ellipsis-text">comment </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="btn a-minimal s-medium f-default c-default id-start cr-round"
            onClick={handleClose}
          >
            <span className="ellipsis-text">Cancel</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            disabled
            onClick={handleClose}
          >
            <span className="ellipsis-text">Transfer</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalTransferMoney };
