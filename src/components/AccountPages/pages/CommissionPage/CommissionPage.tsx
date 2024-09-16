import React from "react";

import "./CommissionPage.scss";

const CommissionPage = () => {
  return (
    <div className="accCommissionPlanWrapper-bc">
      <div className="accCommissionPlanWrapperRow-bc">
        <div className="view-commission page-content-item-aff-bc">
          <div className="fullViewModalContent-bc">
            <div className="fullViewModalHeader-bc withTab-bc">
              <div className="fullViewModalIconBlock-bc">
                <div className="commission-icon-container">
                  <div
                    className="fullViewModalIcon-bc"
                    style={{ background: "rgba(71, 207, 224, 0.11)" }}
                  >
                    <i
                      className="icon bc-icon-commission-plan-48"
                      style={{ color: "rgb(71, 207, 224)" }}
                    />
                  </div>
                  <div className="fullViewModalIconLabel-bc">
                    <h3 className="fullViewModalTitle-bc">SYSTEM__AGENT</h3>
                    <h4 className="fullViewModalSubtitle-bc">
                      Revenue
                      <ul className="static-title-holder fullViewModalTitleTag-bc f-content-size">
                        <li className="st-c">
                          <div
                            className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="tag-cp tag-cc ellipsis-text">
                              rev-share
                            </div>
                            <div className="tag-backdrop" />
                          </div>
                        </li>
                      </ul>
                    </h4>
                  </div>
                </div>
                <div className="commission-action-container" />
              </div>
            </div>
            <div className="hybridWrapper-bc">
              <div className="modal-big-commission-content-row">
                <h3>Products</h3>
              </div>
              <div className="commissionButtonRowWrapper-bc">
                <span className="commissionButtonArrow-bc" />
                <div className="commissionButtonRow-bc">
                  <div className="commissionButtonListEl-bc active">
                    Sportsbook
                  </div>
                  <div className="commissionButtonListEl-bc">Live Games</div>
                  <div className="commissionButtonListEl-bc">Virtual Games</div>
                  <div className="commissionButtonListEl-bc">Skill Games</div>
                  <div className="commissionButtonListEl-bc">Betting Games</div>
                  <div className="commissionButtonListEl-bc">
                    Pool Betting Games
                  </div>
                  <div className="commissionButtonListEl-bc">Slots</div>
                  <div className="commissionButtonListEl-bc">
                    Third Party Poker
                  </div>
                  <div className="commissionButtonListEl-bc">Table Games</div>
                  <div className="commissionButtonListEl-bc">Video Poker</div>
                  <div className="commissionButtonListEl-bc">
                    Betconstruct Poker
                  </div>
                  <div className="commissionButtonListEl-bc">Fantasy Sport</div>
                </div>
                <span className="commissionButtonArrow-bc" />
              </div>
              <div className="confGridElTable-bc">
                <div className="confGridElTableHead-bc">
                  <div className="confGridElTableCell-bc">
                    <span>From NGR</span>
                    <span> (EUR)</span>
                  </div>
                  <div className="confGridElTableCell-bc">
                    <span>To NGR</span>
                    <span> (EUR)</span>
                  </div>
                  <div className="confGridElTableCell-bc">
                    <span>% NGR</span>
                  </div>
                </div>
                <div className="confGridElTableBody-bc">
                  <div className="confGridElTableRow-bc">
                    <div className="confGridElTableCell-bc">
                      <span>0</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>2,500</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>25</span>
                    </div>
                  </div>
                  <div className="confGridElTableRow-bc">
                    <div className="confGridElTableCell-bc">
                      <span>2,500</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>10,000</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>30</span>
                    </div>
                  </div>
                  <div className="confGridElTableRow-bc">
                    <div className="confGridElTableCell-bc">
                      <span>10,000</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>∞</span>
                    </div>
                    <div className="confGridElTableCell-bc">
                      <span>35</span>
                    </div>
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

export { CommissionPage };
