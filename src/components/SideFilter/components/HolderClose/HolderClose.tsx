import React, { SetStateAction } from "react";

import "./HolderClose.scss";

interface IHolderClose {
  setFilterOpenedStatus: React.Dispatch<SetStateAction<boolean>>;
}

const HolderClose = ({ setFilterOpenedStatus }: IHolderClose) => {
  const handelFilterStatus = (status: boolean) => {
    setFilterOpenedStatus(status);
  };
  return (
    <div className="holder-c-wrapper">
      <div className="holder-wrapper">
        <div className="holder-content">
          <ul className="module-header cr-position-radius p-top s-extra-big headerBorder">
            <li className="left-content">
              <div className="left-inner">
                <div className="ellipsis-text module-title" title="filters">
                  filters
                </div>
              </div>
            </li>
            <li className="right-content" />
          </ul>
          <div className="holder-body">
            <div
              className="scroll-holder s-medium"
              style={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                className="scroll-content"
                style={{
                  position: "absolute",
                  inset: "0px",
                  overflow: "scroll",
                }}
              >
                <div className="holder-body-c">
                  <div className="popover-track cursor-pointer">
                    <div className="input-holder a-outline s-default id-end f-full-width cr-full-radius t-text">
                      <div className="input-structure">
                        <i className="icon bc-icon-calendar" />
                        <label>
                          <div className="input-element-relative">
                            <input
                              placeholder="Registration date "
                              className="input-element placeholder"
                              type="text"
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">
                                    Registration date{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="popover-track cursor-pointer">
                    <div className="input-holder a-outline s-default id-end f-full-width cr-full-radius t-text">
                      <div className="input-structure">
                        <i className="icon bc-icon-calendar" />
                        <label>
                          <div className="input-element-relative">
                            <input
                              placeholder="Last login date "
                              className="input-element placeholder"
                              type="text"
                            />
                          </div>
                          <div className="input-element-back">
                            <div className="input-swap-label">
                              <div className="input-swap">
                                <div className="input-swap-animate ellipsis-text hide">
                                  <span className="ellipsis-text">
                                    Last login date{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-holder f-full-width a-outline s-big">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Status "
                                readOnly
                                className="input-element placeholder write-protected"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">
                                      Status{" "}
                                    </span>
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
                  <div className="dropdown-holder f-full-width a-outline s-big">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Role "
                                readOnly
                                className="input-element placeholder write-protected"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">Role </span>
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
                  <div className="dropdown-holder f-full-width a-outline s-big">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Country "
                                readOnly
                                className="input-element placeholder write-protected"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">
                                      Country{" "}
                                    </span>
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
                  <div className="dropdown-holder f-full-width a-outline s-big">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Currency "
                                readOnly
                                className="input-element placeholder write-protected"
                                type="text"
                              />
                            </div>
                            <div className="input-element-back">
                              <div className="input-swap-label">
                                <div className="input-swap">
                                  <div className="input-swap-animate ellipsis-text hide">
                                    <span className="ellipsis-text">
                                      Currency{" "}
                                    </span>
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
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Agent Id "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Agent Id </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Agent Username "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Agent Username{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="revenue name "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  revenue name{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Email "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Email </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="First Name "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  First Name{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Last Name "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Last Name{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Mobile "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">Mobile </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Referral ID "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back">
                          <div className="input-swap-label">
                            <div className="input-swap">
                              <div className="input-swap-animate ellipsis-text hide">
                                <span className="ellipsis-text">
                                  Referral ID{" "}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="grid-holder">
                    <div
                      className="grid-items-group"
                      style={{
                        width: "calc(100% + 2rem)",
                        margin: "-0.5rem -1rem",
                      }}
                    >
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "100%" }}
                      >
                        <ul className="title-holder c-base">
                          <li className="title-text">
                            <div className="ellipsis-text">Players Count</div>
                          </li>
                          <li className="line" />
                        </ul>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="dropdown-holder f-full-width a-outline s-default">
                          <div className="popover-track cursor-pointer">
                            <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text filled">
                              <div className="input-structure">
                                <label>
                                  <div className="input-element-relative">
                                    <input
                                      placeholder="Select "
                                      readOnly
                                      className="input-element write-protected"
                                      type="text"
                                    />
                                  </div>
                                  <div className="input-element-back" />
                                </label>
                                <i className="icon bc-icon-arrow-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                          <div className="input-structure">
                            <label>
                              <div className="input-element-relative">
                                <input
                                  placeholder="Value "
                                  className="input-element placeholder"
                                  type="text"
                                />
                              </div>
                              <div className="input-element-back" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-holder">
                    <div
                      className="grid-items-group"
                      style={{
                        width: "calc(100% + 2rem)",
                        margin: "-0.5rem -1rem",
                      }}
                    >
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "100%" }}
                      >
                        <ul className="title-holder c-base">
                          <li className="title-text">
                            <div className="ellipsis-text">
                              Pending Commission
                            </div>
                          </li>
                          <li className="line" />
                        </ul>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="dropdown-holder f-full-width a-outline s-default">
                          <div className="popover-track cursor-pointer">
                            <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text filled">
                              <div className="input-structure">
                                <label>
                                  <div className="input-element-relative">
                                    <input
                                      placeholder="Select "
                                      readOnly
                                      className="input-element write-protected"
                                      type="text"
                                    />
                                  </div>
                                  <div className="input-element-back" />
                                </label>
                                <i className="icon bc-icon-arrow-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                          <div className="input-structure">
                            <label>
                              <div className="input-element-relative">
                                <input
                                  placeholder="Value "
                                  className="input-element placeholder"
                                  type="text"
                                />
                              </div>
                              <div className="input-element-back" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid-holder">
                    <div
                      className="grid-items-group"
                      style={{
                        width: "calc(100% + 2rem)",
                        margin: "-0.5rem -1rem",
                      }}
                    >
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "100%" }}
                      >
                        <ul className="title-holder c-base">
                          <li className="title-text">
                            <div className="ellipsis-text">
                              available commission
                            </div>
                          </li>
                          <li className="line" />
                        </ul>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="dropdown-holder f-full-width a-outline s-default">
                          <div className="popover-track cursor-pointer">
                            <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text filled">
                              <div className="input-structure">
                                <label>
                                  <div className="input-element-relative">
                                    <input
                                      placeholder="Select "
                                      readOnly
                                      className="input-element write-protected"
                                      type="text"
                                    />
                                  </div>
                                  <div className="input-element-back" />
                                </label>
                                <i className="icon bc-icon-arrow-down" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="grid-child"
                        style={{ padding: "0.5rem 1rem", width: "50%" }}
                      >
                        <div className="input-holder a-outline s-big id-start f-full-width cr-full-radius t-text">
                          <div className="input-structure">
                            <label>
                              <div className="input-element-relative">
                                <input
                                  placeholder="Value "
                                  className="input-element placeholder"
                                  type="text"
                                />
                              </div>
                              <div className="input-element-back" />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="holder-footer">
            <div className="filterButtons-bc">
              <button
                className="btn a-minimal s-default f-default c-default id-start cr-round"
                disabled
              >
                <span className="ellipsis-text">Reset</span>
              </button>
              <button
                className="btn a-default s-default f-default c-confirm id-start cr-round"
                disabled
              >
                <span className="ellipsis-text">Apply</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="holder-toggle">
        <button>
          <div>
            <i
              className="icon layer-1 bc-icon-arrow-left"
              onClick={() => handelFilterStatus(false)}
            />
            <i
              className="icon layer-2 bc-icon-filter"
              onClick={() => handelFilterStatus(true)}
            />
          </div>
          <i className="icon layer-3 bc-icon-arrow-right" />
        </button>
      </div>
    </div>
  );
};

export { HolderClose };
