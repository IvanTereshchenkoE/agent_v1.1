import React from "react";

import "./CommissionContainer.scss";

const CommissionContainer = () => {
  return (
    <>
      <div className="commission-tabs">
        <div className="cha-ra-group t-tab">
          <div className="crs-holder lp-right la-start t-tab input-active">
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label
                  className="ellipsis-text"
                  htmlFor="ba5640ef-61cd-7a7b-abe6-412ddd4d9584"
                >
                  Revenue
                </label>
              </div>
              <div className="crs-item crs-component">
                <input
                  type="radio"
                  id="ba5640ef-61cd-7a7b-abe6-412ddd4d9584"
                  name="controlled"
                  defaultChecked
                />
                <label
                  className="radio cr-element s-small active"
                  htmlFor="ba5640ef-61cd-7a7b-abe6-412ddd4d9584"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="configuration-container height-commission padding-20">
        <div className="page-wrapper-aff-bc page-wrapper-aff-commission-bc">
          <div className="page-head-aff-bc">
            <div className="page-head-aff-bc-row">
              <div className="page-head-item-aff-bc">
                <div className="page-head-item-cell-aff-bc filtersSection">
                  <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text search-holder">
                    <div className="input-structure">
                      <i className="icon bc-icon-search" />
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Search "
                            className="input-element placeholder"
                            type="text"
                          />
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                  <div className="filterInput dropdown-holder f-full-width a-outline s-default">
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <input
                                placeholder="Subtypes "
                                className="input-element placeholder"
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
              </div>
              <div className="page-head-item-aff-bc">
                <div className="page-head-item-cell-aff-bc">
                  <div className="commPlanRow-bc">
                    <div className="page-head-item-cell-aff-bc">
                      <button className="btn a-minimal s-default f-content-size c-primary id-start cr-round">
                        <i className="icon bc-icon-archive-48" />
                        <span className="ellipsis-text">Archived list</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-content-inner-aff-bc commissionRevenueSection-bc">
            <div className="active page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            SYSTEM__AGENT
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc">
                        <i className="icon cursor-pointer bc-icon-more-vertical" />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            40 por ciento
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>40</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            1 porciento
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>1</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            50 por ciento
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>50</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">neto</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Net Deposit
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                    </div>
                    <span className="commissionButtonArrow-bc" />
                  </div>
                  <div className="confGridElTable-bc">
                    <div className="confGridElTableHead-bc">
                      <div className="confGridElTableCell-bc">
                        <span>From GGR</span>
                        <span> (EUR)</span>
                      </div>
                      <div className="confGridElTableCell-bc">
                        <span>To GGR</span>
                        <span> (EUR)</span>
                      </div>
                      <div className="confGridElTableCell-bc">
                        <span>% NDWA</span>
                      </div>
                    </div>
                    <div className="confGridElTableBody-bc">
                      <div className="confGridElTableRow-bc">
                        <div className="confGridElTableCell-bc">
                          <span>0</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">20% TODO</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            10 por ciento
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>10</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">PLAN 25%</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">PLAN 20%</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>20</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">PLAN 15%</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>15</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">PLAN 45%</p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>45</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            comision Juanjo y Fran
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-content-item-aff-bc">
              <div className="page-content-item-head-row-aff-bc">
                <ul className="module-header cr-position-radius p-top s-big headerBorder">
                  <li className="left-content">
                    <div className="left-inner">
                      <div className="ellipsis-text module-title">
                        <div className="p-c-item-head-aff-bc">
                          <i
                            className="icon bc-icon-commission-plan-48"
                            style={{ color: "rgb(71, 207, 224)" }}
                          />
                          <p className="p-c-item-inner-head-aff-bc">
                            comision agentes
                          </p>
                          <ul className="static-title-holder p-c-item-inner-head-aff-bc f-content-size">
                            <li className="st-c">
                              <div
                                className="tag-c cr-smooth-radius a-minimal f-content-size s-small pointer-events-none"
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <div className="tag-cp tag-cc ellipsis-text">
                                  Rev Share
                                </div>
                                <div className="tag-backdrop" />
                              </div>
                            </li>
                          </ul>
                          <div className="titleBrand" />
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="right-content">
                    <div className="page-content-item-head-row-inner-aff-bc">
                      <div className="page-c-i-h-r-i-aff-bc">
                        <button className="btn a-minimal s-medium f-content-size c-primary id-start cr-round c-icon">
                          <i className="icon bc-icon-view-doc" />
                        </button>
                      </div>
                      <div className="page-c-i-h-r-i-aff-bc" />
                    </div>
                  </li>
                </ul>
              </div>
              <div className="page-content-item-content-row-aff-bc">
                <div className="hybridWrapper-bc">
                  <ul className="module-header cr-position-radius p-top s-big standardModuleTitle headerBorder">
                    <li className="left-content">
                      <div className="left-inner">
                        <div
                          className="ellipsis-text module-title"
                          title="Products"
                        >
                          Products
                        </div>
                      </div>
                    </li>
                    <li className="right-content" />
                  </ul>
                  <div className="commissionButtonRowWrapper-bc">
                    <span className="commissionButtonArrow-bc" />
                    <div className="commissionButtonRow-bc">
                      <div className="commissionButtonListEl-bc active">
                        Sportsbook
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Live Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Virtual Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Skill Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Pool Betting Games
                      </div>
                      <div className="commissionButtonListEl-bc">Slots</div>
                      <div className="commissionButtonListEl-bc">
                        Third Party Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Table Games
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Video Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Betconstruct Poker
                      </div>
                      <div className="commissionButtonListEl-bc">
                        Fantasy Sport
                      </div>
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
                          <span>∞</span>
                        </div>
                        <div className="confGridElTableCell-bc">
                          <span>100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { CommissionContainer };
