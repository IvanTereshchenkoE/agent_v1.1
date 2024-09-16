import React, { useState } from "react";

import "./DefaultForm.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setModalResetPassword,
  setModalSettings,
} from "store/reducers/modalsReducer";

interface IDefaultForm {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DefaultForm = ({ setModalOpen }: IDefaultForm) => {
  const dispatch = useDispatch();
  const [formType, setFormType] = useState("default");
  const navigation = useNavigate();
  const handleFormType = (item: string) => {
    setFormType(item);
  };
  const handleNavigate = (item: string) => {
    navigation(item);
  };
  const handleOpenSettings = () => {
    dispatch(setModalSettings(true));
    setModalOpen(false);
  };
  const handleResetPassword = () => {
    dispatch(setModalResetPassword(true));
    setModalOpen(false);
  };
  return (
    <ul
      className="popover-content modal-container"
      style={{
        top: 45,
        height: formType === "default" ? 351 : 112,
        width: 316,
      }}
    >
      <li className="popover-body">
        <div
          className="scroll-holder s-medium"
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "auto",
            minHeight: "0px",
            maxHeight: "510px",
          }}
        >
          <div
            className="scroll-content"
            style={{
              position: "relative",
              overflow: "scroll",
              minHeight: "16px",
              maxHeight: "526px",
            }}
          >
            <div className="profile-menu-holder">
              <div className="menu-items-wrapper popover-top-bottom-padding">
                <ul style={{ translate: "0%" }}>
                  {formType === "default" ? (
                    <li>
                      <label
                        className="option-container border-none sticky-none c-default"
                        onClick={() =>
                          handleNavigate("/account/1063512/account")
                        }
                      >
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              My Account
                            </div>
                          </li>
                        </ul>
                      </label>
                      <label
                        className="option-container border-none sticky-none c-default"
                        onClick={handleOpenSettings}
                      >
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              Settings
                            </div>
                          </li>
                        </ul>
                      </label>
                      <label
                        className="option-container border-none sticky-none c-default"
                        onClick={() => handleNavigate("/wallet")}
                      >
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              Wallet
                            </div>
                          </li>
                        </ul>
                      </label>
                      <label className="option-container border-none sticky-none c-default">
                        <ul className="option-texts">
                          <li>
                            <div
                              className="option-title ellipsis-text"
                              onClick={handleResetPassword}
                            >
                              Reset Password
                            </div>
                          </li>
                        </ul>
                      </label>
                      <label
                        className="option-container border-none sticky-none c-default"
                        onClick={() => handleFormType("language")}
                      >
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              Language: English
                            </div>
                          </li>
                        </ul>
                        <div className="option-right-elements">
                          <i className="icon bc-icon-arrow-right" />
                        </div>
                      </label>
                      <label className="option-container border-none sticky-none c-default">
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              Reporting currency: EUR
                            </div>
                          </li>
                        </ul>
                      </label>
                      <label className="option-container color-danger border-none sticky-none c-default">
                        <ul className="option-texts">
                          <li>
                            <div className="option-title ellipsis-text">
                              Log Out
                            </div>
                          </li>
                        </ul>
                      </label>
                    </li>
                  ) : null}
                  <li>
                    {formType === "language" ? (
                      <>
                        <li>
                          <label
                            className="option-container border-bottom sticky-none c-default"
                            onClick={() => handleFormType("default")}
                          >
                            <div className="option-left-elements">
                              <i className="icon bc-icon-arrow-left" />
                            </div>
                            <ul className="option-texts">
                              <li>
                                <div className="option-title ellipsis-text">
                                  Language: English
                                </div>
                              </li>
                            </ul>
                          </label>
                          <label className="option-container border-none sticky-none c-default">
                            <ul className="option-texts">
                              <li>
                                <div className="option-title ellipsis-text">
                                  Español
                                </div>
                              </li>
                            </ul>
                          </label>
                        </li>
                      </>
                    ) : null}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="scroll-track horizontal"
            style={{
              position: "absolute",
              height: "6px",
              visibility: "hidden",
            }}
          >
            <div
              className="scroll-thumb horizontal"
              style={{
                position: "relative",
                display: "block",
                height: "100%",
                width: "0px",
              }}
            />
          </div>
          <div
            className="scroll-track vertical"
            style={{
              position: "absolute",
              width: "6px",
              visibility: "hidden",
            }}
          >
            <div
              className="scroll-thumb vertical"
              style={{
                position: "relative",
                display: "block",
                width: "100%",
                height: "0px",
              }}
            />
          </div>
        </div>
      </li>
    </ul>
  );
};

export { DefaultForm };
