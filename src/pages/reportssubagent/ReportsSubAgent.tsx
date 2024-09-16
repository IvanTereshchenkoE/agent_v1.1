import React from "react";

import "./ReportsSubAgent.scss";
import { FiltersAppend, Layout } from "components";

const filterList = [
  "Reporting currency = EUR",
  "Month 2023/12/01 - 2023/12/10",
];

const ReportsSubAgent = () => {
  return (
    <Layout>
      <FiltersAppend filterList={filterList} />
      <div className="subUsersPageMainWRapper-bc">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title" title="Sub agents">
                Sub agents
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
        <div className="usersTableWrapper-bc">
          <div className="usersTableContainer-bc">
            <div className="usersTable-bc">
              <div className="usersTableHead-bc">
                <div className="usersTableRow-bc">
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Role</div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Agent Id</div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Agent Username</div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Direct Commission</div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">
                      Referral Commission
                    </div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Pending Commission</div>
                  </div>
                  <div className="usersTableCol-bc">
                    <div className="usersTableLabel-bc">Net Revenue</div>
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
                        <button className="btn a-minimal s-medium f-default c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-info-48" />
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
                      data-title={1063512}
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>1063512</span>
                    </div>
                    <div
                      data-title="pefaco@gmail.com"
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>pefaco@gmail.com</span>
                    </div>
                    <div
                      data-title={0}
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>0.00</span>
                    </div>
                    <div
                      data-title={0}
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>0.00</span>
                    </div>
                    <div
                      data-title={0}
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>0.00</span>
                    </div>
                    <div
                      data-title={0}
                      className="usersTableInnerCol-bc disabled"
                    >
                      <span>0.00</span>
                    </div>
                  </div>
                  <div className="usersTableInnerRow-bc">
                    <div className="usersTableInner-bc">
                      <div className="treeActionBLock-bc">
                        <div className="treeActionBLockInner-bc">
                          <button className="btn a-minimal s-medium f-default c-primary id-start cr-round c-icon">
                            <i className="icon bc-icon-info-48" />
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
                                style={{
                                  cursor: "pointer",
                                }}
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
                        data-title={1600685}
                        className="usersTableInnerCol-bc"
                      >
                        <span>1600685</span>
                      </div>
                      <div
                        data-title="sho@gmail.com"
                        className="usersTableInnerCol-bc"
                      >
                        <span>sho@gmail.com</span>
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
                      <div data-title={0} className="usersTableInnerCol-bc">
                        <span>0.00</span>
                      </div>
                    </div>
                  </div>
                  <div className="usersTableInnerRow-bc">
                    <div className="usersTableInner-bc">
                      <div className="treeActionBLock-bc">
                        <div className="treeActionBLockInner-bc">
                          <button className="btn a-minimal s-medium f-default c-primary id-start cr-round c-icon">
                            <i className="icon bc-icon-info-48" />
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
                                style={{
                                  cursor: "pointer",
                                }}
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
                        data-title={1063513}
                        className="usersTableInnerCol-bc"
                      >
                        <span>1063513</span>
                      </div>
                      <div
                        data-title="agentedepais@gmail.com"
                        className="usersTableInnerCol-bc"
                      >
                        <span>agentedepais@gmail.com</span>
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
      </div>
    </Layout>
  );
};

export { ReportsSubAgent };
