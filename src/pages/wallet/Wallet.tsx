import React from "react";

import "./Wallet.scss";
import { FiltersAppend, Layout } from "components";

const Wallet = () => {
  return (
    <Layout isSideFilterNone={true}>
      <FiltersAppend isFilterHide={true} />
      <div>
        <div className="mBot15">
          <div className="grid-holder">
            <div
              className="grid-items-group"
              style={{ width: "calc(100% + 2rem)", margin: "-1rem" }}
            >
              <div
                className="grid-child"
                style={{ padding: "1rem", width: "33.3333%" }}
              >
                <ul className="mBot16 widget-holder t-default s-big widget-grid shadow border">
                  <li className="image" />
                  <li className="head">
                    <ul className="module-header cr-position-radius p-top s-big headerBorder">
                      <li className="left-content">
                        <div className="left-inner">
                          <div
                            className="ellipsis-text module-title"
                            title="available commission"
                          >
                            available commission
                          </div>
                        </div>
                      </li>
                      <li className="right-content" />
                    </ul>
                  </li>
                  <li className="text">
                    <p className="ellipsis-text">€ 0.00</p>
                  </li>
                </ul>
              </div>
              <div
                className="grid-child"
                style={{ padding: "1rem", width: "33.3333%" }}
              >
                <ul
                  className="mBot16 widget-holder t-default s-big widget-grid shadow border"
                  //   style={{ "--hero": "#46904a" }}
                >
                  <li className="image" />
                  <li className="head">
                    <ul className="module-header cr-position-radius p-top s-big headerBorder">
                      <li
                        className="left-content"
                        // style={{ "--hero": "#46904a" }}
                      >
                        <div className="left-inner">
                          <div
                            className="ellipsis-text module-title"
                            title="Pending Commission"
                          >
                            Pending Commission
                          </div>
                        </div>
                      </li>
                      <li className="right-content" />
                    </ul>
                  </li>
                  <li className="text">
                    <p className="ellipsis-text">€ 0.00</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title" title="Wallet report">
                Wallet report
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
        <div className="walletButtonGroup-bc" />
        <div className="table-holder" style={{ maxWidth: "1228.75px" }}>
          <div
            className="scroll-holder s-medium"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "8.6rem",
            }}
          >
            <div
              className="scroll-content"
              style={{
                position: "absolute",
                overflow: "scroll",
                inset: "0px",
              }}
            >
              <div className="ta-n-body ta-header">
                <div className="ta-row border-bottom">
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-currencyCode"
                    title="Currency"
                    style={{ left: "0px", right: "0px", width: "245.75px" }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Currency
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-creditLine"
                    title="Credit Line"
                    style={{ left: "0px", right: "0px", width: "245.75px" }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Credit Line
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-credit"
                    title="Credit"
                    style={{ left: "0px", right: "0px", width: "245.75px" }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Credit
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-balance"
                    title="Balance"
                    style={{ left: "0px", right: "0px", width: "245.75px" }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Balance
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder">
                      <i className="th-divider" />
                    </div>
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                  <div
                    className="ta-cell ta-header-cell"
                    data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-availability"
                    title="Total Available"
                    style={{ left: "0px", right: "0px", width: "245.75px" }}
                    draggable="true"
                  >
                    <div className="ta-cell-block">
                      <div className="ta-cell-header-tittle ta-cell-header-item">
                        <div
                          className="sticky-viewport-checker"
                          style={{ width: "1px", left: "-1px" }}
                        />
                        <div className="table-heading">
                          <div className="table-heading-text ellipsis-text">
                            Total Available
                          </div>
                        </div>
                        <div>
                          <i className="icon cell-options cursor-pointer bc-icon-drag" />
                        </div>
                      </div>
                    </div>
                    <div className="th-divider-holder" />
                    <div
                      className="sticky-viewport-checker"
                      style={{ width: "1px", right: "-1px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="ta-body">
                <div
                  aria-label="grid"
                  aria-readonly="true"
                  className="ReactVirtualized__Grid ReactVirtualized__List"
                  role="grid"
                  tabIndex={0}
                  style={{
                    boxSizing: "border-box",
                    direction: "ltr",
                    height: "auto",
                    position: "relative",
                    width: "1228.75px",
                    willChange: "transform",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="ReactVirtualized__Grid__innerScrollContainer"
                    role="rowgroup"
                    style={{
                      width: "auto",
                      height: "51px",
                      maxWidth: "1228.75px",
                      maxHeight: "51px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <div
                      className="ta-group"
                      data-index={0}
                      style={{
                        height: "51px",
                        left: "0px",
                        position: "absolute",
                        top: "0px",
                        width: "100%",
                      }}
                    >
                      <div className="ta-row border-bottom">
                        <div className="ta-gr-left-line" />
                        <div
                          className="ta-cell"
                          data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-currencyCode"
                          title="EUR"
                          style={{
                            left: "0px",
                            right: "0px",
                            width: "245.75px",
                          }}
                        >
                          <div className="ellipsis-text">EUR</div>
                        </div>
                        <div
                          className="ta-cell"
                          data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-creditLine"
                          style={{
                            left: "0px",
                            right: "0px",
                            width: "245.75px",
                          }}
                        >
                          <div className="ellipsis-text">100.00</div>
                        </div>
                        <div
                          className="ta-cell"
                          data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-credit"
                          style={{
                            left: "0px",
                            right: "0px",
                            width: "245.75px",
                          }}
                        >
                          <div className="ellipsis-text">100.00</div>
                        </div>
                        <div
                          className="ta-cell"
                          data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-balance"
                          style={{
                            left: "0px",
                            right: "0px",
                            width: "245.75px",
                          }}
                        >
                          <div className="ellipsis-text">0.00</div>
                        </div>
                        <div
                          className="ta-cell"
                          data-id="02f9f0c0-01e5-b520-df62-5713b18d5f2b-availability"
                          style={{
                            left: "0px",
                            right: "0px",
                            width: "245.75px",
                          }}
                        >
                          <div className="ellipsis-text">100.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resize-triggers">
                <div className="expand-trigger">
                  <div style={{ width: "1230px", height: "105px" }} />
                </div>
                <div className="contract-trigger" />
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
        </div>
      </div>
    </Layout>
  );
};

export { Wallet };
