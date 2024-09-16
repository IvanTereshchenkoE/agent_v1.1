import React from "react";

import "./TabelHolderTree.scss";

const TabelHolderTree = () => {
  return (
    <div className="usersTableWrapper-bc">
      <div className="usersTableContainer-bc">
        <div className="usersTable-bc">
          <div className="usersTableHead-bc">
            <div className="usersTableRow-bc">
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Role</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Username</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Main Currency</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Direct Players</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">
                  Credit Line
                  <i className="icon bc-icon-info-48" />
                </div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">
                  Total Available
                  <i className="icon bc-icon-info-48" />
                </div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">
                  Balance
                  <i className="icon bc-icon-info-48" />
                </div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Credit</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">available commission</div>
              </div>
              <div className="usersTableCol-bc">
                <div className="usersTableLabel-bc">Pending Commission</div>
              </div>
            </div>
          </div>
        </div>
        <div className="usersTableListWrapper-bc">
          <div className="usersTableListEl-bc">
            <div className="usersTableInnerRow-bc active">
              <div className="usersTableInner-bc">
                <div className="treeActionBLock-bc">
                  <div className="treeActionBLockInner-bc">
                    <button
                      className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                      title="password"
                    >
                      <i className="icon bc-icon-blocked" />
                    </button>
                    <button className="btn a-minimal s-default f-default c-primary id-start cr-round c-icon">
                      <i className="icon bc-icon-more-horizontal" />
                    </button>
                  </div>
                </div>
                <div className="usersTableInnerCol-bc disabled roleId">
                  <div className="usersTableLabelBlock-bc" data-index={1}>
                    <span className="statusTab" />
                    <i className="icon bc-icon-arrow-down usersTableArrow-bc" />
                    <ul className="static-title-holder usersTableTag-bc f-compact">
                      <li className="st-c">
                        <div
                          className="tag-c cr-smooth-radius a-light f-compact s-medium pointer-events-none"
                          style={{ cursor: "pointer" }}
                        >
                          <div className="tag-cp tag-cc ellipsis-text">CM</div>
                          <div className="tag-backdrop" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  data-title="pefaco@gmail.com"
                  className="usersTableInnerCol-bc disabled"
                >
                  <span title="pefaco@gmail.com">
                    <ul className="static-title-holder">
                      <li className="st-c">
                        <div
                          className="status-holder c-#46904a"
                        //   style={{ "--hero": "#46904a" }}
                        >
                          <div className="status-icon">
                            <i className="icon bc-icon-dot" />
                          </div>
                        </div>
                      </li>
                    </ul>
                    pefaco@gmail.com
                  </span>
                </div>
                <div
                  data-title="EUR"
                  className="usersTableInnerCol-bc disabled"
                >
                  <span>EUR</span>
                </div>
                <div className="usersTableInnerCol-bc disabled">
                  <span>-</span>
                </div>
                <div
                  data-title={100}
                  className="usersTableInnerCol-bc disabled"
                >
                  <span>100.00</span>
                </div>
                <div
                  data-title={100}
                  className="usersTableInnerCol-bc disabled"
                >
                  <span>100.00</span>
                </div>
                <div data-title={0} className="usersTableInnerCol-bc disabled">
                  <span>0</span>
                </div>
                <div
                  data-title={100}
                  className="usersTableInnerCol-bc disabled"
                >
                  <span>100.00</span>
                </div>
                <div data-title={0} className="usersTableInnerCol-bc disabled">
                  <span>0.00</span>
                </div>
                <div data-title={0} className="usersTableInnerCol-bc disabled">
                  <span>0.00</span>
                </div>
              </div>
              <div className="usersTableInnerRow-bc">
                <div className="usersTableInner-bc">
                  <div className="treeActionBLock-bc">
                    <div className="treeActionBLockInner-bc">
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="message"
                      >
                        <i className="icon bc-icon-message" />
                      </button>
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="password"
                      >
                        <i className="icon bc-icon-blocked" />
                      </button>
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="transfer"
                      >
                        <i className="icon bc-icon-transfer" />
                      </button>
                      <button className="btn a-minimal s-default f-default c-primary id-start cr-round c-icon">
                        <i className="icon bc-icon-more-horizontal" />
                      </button>
                    </div>
                  </div>
                  <div className="usersTableInnerCol-bc roleId">
                    <div className="usersTableLabelBlock-bc" data-index={2}>
                      <span className="statusTab" />
                      <ul className="static-title-holder usersTableTag-bc f-compact">
                        <li className="st-c">
                          <div
                            className="tag-c cr-smooth-radius a-light f-compact s-medium pointer-events-none"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="tag-cp tag-cc ellipsis-text">
                              AG
                            </div>
                            <div className="tag-backdrop" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    data-title="sho@gmail.com"
                    className="usersTableInnerCol-bc"
                  >
                    <span title="sho@gmail.com">
                      <ul className="static-title-holder">
                        <li className="st-c">
                          <div
                            className="status-holder c-#e03f33"
                            // style={{ "--hero": "#e03f33" }}
                          >
                            <div className="status-icon">
                              <i className="icon bc-icon-dot" />
                            </div>
                          </div>
                        </li>
                      </ul>
                      sho@gmail.com
                    </span>
                  </div>
                  <div data-title="EUR" className="usersTableInnerCol-bc">
                    <span>EUR</span>
                  </div>
                  <div className="usersTableInnerCol-bc">
                    <span>-</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                </div>
              </div>
              <div className="usersTableInnerRow-bc">
                <div className="usersTableInner-bc">
                  <div className="treeActionBLock-bc">
                    <div className="treeActionBLockInner-bc">
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="message"
                      >
                        <i className="icon bc-icon-message" />
                      </button>
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="password"
                      >
                        <i className="icon bc-icon-blocked" />
                      </button>
                      <button
                        className="btn a-minimal s-medium f-default c-hero id-start cr-round c-icon"
                        title="transfer"
                      >
                        <i className="icon bc-icon-transfer" />
                      </button>
                      <button className="btn a-minimal s-default f-default c-primary id-start cr-round c-icon">
                        <i className="icon bc-icon-more-horizontal" />
                      </button>
                    </div>
                  </div>
                  <div className="usersTableInnerCol-bc roleId">
                    <div className="usersTableLabelBlock-bc" data-index={2}>
                      <span className="statusTab" />
                      <i className="icon bc-icon-arrow-down usersTableArrow-bc" />
                      <ul className="static-title-holder usersTableTag-bc f-compact">
                        <li className="st-c">
                          <div
                            className="tag-c cr-smooth-radius a-light f-compact s-medium pointer-events-none"
                            style={{cursor: "pointer" }}
                          >
                            <div className="tag-cp tag-cc ellipsis-text">
                              CM
                            </div>
                            <div className="tag-backdrop" />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    data-title="agentedepais@gmail.com"
                    className="usersTableInnerCol-bc"
                  >
                    <span title="agentedepais@gmail.com">
                      <ul className="static-title-holder">
                        <li className="st-c">
                          <div
                            className="status-holder c-#e03f33"
                            // style={{ "--hero": "#e03f33" }}
                          >
                            <div className="status-icon">
                              <i className="icon bc-icon-dot" />
                            </div>
                          </div>
                        </li>
                      </ul>
                      agentedepais@gmail.com
                    </span>
                  </div>
                  <div data-title="EUR" className="usersTableInnerCol-bc">
                    <span>EUR</span>
                  </div>
                  <div className="usersTableInnerCol-bc">
                    <span>-</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                  <div data-title={0} className="usersTableInnerCol-bc">
                    <span>0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TabelHolderTree };
