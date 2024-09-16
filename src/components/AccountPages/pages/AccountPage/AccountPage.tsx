import React from "react";

import "./AccountPage.scss";

const AccountPage = () => {
  return (
    <div className="mobileElWrapper-bc">
      <div className="mBot15 accountHeadPart-bc">
        <div className="account-page-head accountPageHeaderRow-bc">
          <div className="accountPageHeaderCol-bc">
            <div className="accountPageHeaderImage-bc">
              <span className="account-icon-wrapper-bc">
                <i className="icon avatar bc-icon-user-48" />
              </span>
            </div>
            <div>
              <h2 className="account-user-mail">pefaco@gmail.com</h2>
              <h3 className="account-user-username"> </h3>
            </div>
          </div>
          <div className="accountPageHeaderCol-bc" />
        </div>
        <div className="divider type-horizontal" style={{ width: "100%" }} />
        <div className="header-chart-widgets-holder">
          <div className="walletWidgetWrapper-bc">
            <div className="accountWalletWidgetsBlock-bc">
              <span className="walletTitle">Earnings Wallet</span>
              <div className="walletBlock">
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(71, 207, 224)" }} />
                      <span className="ellipsis-text">Pending Commission</span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 0.00</span>
                    </li>
                  </ul>
                </div>
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(84, 142, 112)" }} />
                      <span className="ellipsis-text">
                        available commission
                      </span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 0.00</span>
                    </li>
                  </ul>
                </div>
              </div>
              <span className="walletTitle">Wallet</span>
              <div className="walletBlock">
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(255, 173, 95)" }} />
                      <span className="ellipsis-text">Credit</span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 100.00</span>
                    </li>
                  </ul>
                </div>
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(62, 195, 239)" }} />
                      <span className="ellipsis-text">Credit Line</span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 100.00</span>
                    </li>
                  </ul>
                </div>
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(112, 199, 154)" }} />
                      <span className="ellipsis-text">Balance</span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 0.00</span>
                    </li>
                  </ul>
                </div>
                <div className="walletWidget-bc">
                  <div className="widgetTooltip-bc noneClass-bc">
                    <ul className="widgetTooltipDataList-bc" />
                  </div>
                  <ul className="widget-holder t-minimal s-medium shadow">
                    <li>
                      <i style={{ background: "rgb(125, 198, 129)" }} />
                      <span className="ellipsis-text">Total Available</span>
                    </li>
                    <li>
                      <span className="ellipsis-text">€ 100.00</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="title-holder c-hero">
        <li className="title-text">
          <div className="ellipsis-text">User info</div>
        </li>
        <li className="line" />
        <li>
          <div className="accountEditButton-bc">
            <button className="btn a-minimal s-medium f-default c-primary id-start cr-round">
              <i className="icon bc-icon-edit" />
              <span className="ellipsis-text">Edit</span>
            </button>
          </div>
        </li>
      </ul>
      <form noValidate className="grid-components-alignment">
        <div className="grid-container">
          <div className="grid-child-el mobilePersonalInfoSections-bc">
            <div className="user-info-block">
              <ul className="title-holder c-hero user-info-block-title">
                <li className="title-text">
                  <div className="ellipsis-text">Personal info</div>
                </li>
                <li className="line" />
              </ul>
              <ul className="user-info-inner">
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">First Name </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Second Name </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Last Name </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Second Last Name </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="keyValue-container cursorPointer">
                    <p className="label label regular">Document</p>
                    <p className="value" />
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="dropdown-holder f-full-width a-minimal s-default pointer-events-none-dropdown">
                    <div
                      className="input-title ellipsis-text"
                      style={{ width: "fit-content" }}
                    >
                      Gender
                    </div>
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <div className="input-element read-only placeholder write-protected">
                                <div className="ellipsis-text" />
                              </div>
                            </div>
                            <div className="input-element-back" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="restorePhoneNumberContainer">
                    <div className="countryCodeField">
                      <div className="dropdown-holder f-content-size a-minimal s-big pointer-events-none-dropdown">
                        <div
                          className="input-title ellipsis-text"
                          style={{ width: "fit-content" }}
                        >
                          Code
                        </div>
                        <div className="popover-track cursor-pointer">
                          <div className="input-holder a-minimal s-big id-start f-content-size cr-smooth-radius t-text read-only">
                            <div className="input-structure">
                              <label>
                                <div className="input-element-relative">
                                  <div className="input-element read-only placeholder">
                                    <div className="ellipsis-text" />
                                  </div>
                                </div>
                                <div className="fit-content-hack">
                                  <div className="input-element">Select </div>
                                </div>
                                <div className="input-element-back" />
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cellPhoneNumberField">
                      <div className="input-holder a-minimal s-big id-start f-full-width cr-smooth-radius t-text read-only">
                        <div className="input-title ellipsis-text">
                          <span className="ellipsis-text">Phone Number </span>
                        </div>
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <div className="input-element read-only placeholder">
                                <div className="ellipsis-text" />
                              </div>
                            </div>
                            <div className="input-element-back" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="dropdown-holder f-full-width a-minimal s-default pointer-events-none-dropdown">
                    <div
                      className="input-title ellipsis-text"
                      style={{ width: "fit-content" }}
                    >
                      Countries
                    </div>
                    <div className="popover-track cursor-pointer">
                      <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                        <div className="input-structure">
                          <label>
                            <div className="input-element-relative">
                              <div className="input-element read-only placeholder">
                                <div className="ellipsis-text" />
                              </div>
                            </div>
                            <div className="input-element-back" />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">City </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Address </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Zip code </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">CPF number </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="popover-track cursor-pointer">
                    <div className="input-holder a-minimal s-default id-end f-full-width cr-smooth-radius t-text default-cursor read-only">
                      <div className="input-title ellipsis-text">
                        <span className="ellipsis-text">Birth Date </span>
                      </div>
                      <div className="input-structure">
                        <label>
                          <div className="input-element-relative">
                            <div className="input-element read-only placeholder">
                              <div className="ellipsis-text" />
                            </div>
                          </div>
                          <div className="input-element-back" />
                        </label>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-child-el mobilePersonalInfoSections-bc">
            <div className="user-info-block">
              <ul className="title-holder c-hero user-info-block-title">
                <li className="title-text">
                  <div className="ellipsis-text">Account info</div>
                </li>
                <li className="line" />
              </ul>
              <ul className="user-info-inner triple-grid">
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Affiliate ID </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">1063512</div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Username </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">
                              pefaco@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Email </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">
                              pefaco@gmail.com
                            </div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Skype </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div>
                    <p className="label user-info-label regular">Status</p>
                    <ul className="static-title-holder">
                      <li className="st-c">
                        <div>
                          <div className="status-icon">
                            <i className="icon bc-icon-dot" />
                          </div>
                          <p>
                            <span>Active</span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <p className="label user-info-block-title regular">Role</p>
                  <div className="user-role-block">
                    <ul className="static-title-holder f-content-size">
                      <li className="st-c">
                        <div
                          className="tag-c cr-smooth-radius a-light f-content-size s-medium pointer-events-none"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <div className="tag-cp tag-cc ellipsis-text">CM</div>
                          <div className="tag-backdrop" />
                        </div>
                      </li>
                    </ul>
                    <p className="user-role-name">Continental manager</p>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Currency </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">EUR</div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Last login date </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">
                              2023-12-09 12:10:19
                            </div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Register date </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">
                              2023-02-15 15:53:39
                            </div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="keyValue-container">
                    <p className="label label regular">Direct Players</p>
                    <p className="value">0</p>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only filled">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Registration IP </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only">
                            <div className="ellipsis-text">188.241.82.153</div>
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Telegram </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-text read-only">
                    <div className="input-title ellipsis-text">
                      <span className="ellipsis-text">Marketing Website </span>
                    </div>
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <div className="input-element read-only placeholder">
                            <div className="ellipsis-text" />
                          </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid-child-el mobilePersonalInfoSections-bc">
            <div className="user-info-block">
              <ul className="title-holder c-hero user-info-block-title">
                <li className="title-text">
                  <div className="ellipsis-text">Financial info</div>
                </li>
                <li className="line" />
              </ul>
              <ul className="user-info-inner solo-col">
                <li className="user-info-inner-el">
                  <div className="keyValue-container user-info-read-only">
                    <p className="label label regular">Bonus Cost</p>
                    <p className="value">0.00</p>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="keyValue-container user-info-read-only">
                    <p className="label label regular">Revenue life time</p>
                    <p className="value">-</p>
                  </div>
                </li>
                <li className="user-info-inner-el">
                  <div className="keyValue-container user-info-read-only">
                    <p className="label label regular">Flat Fee</p>
                    <p className="value">0.00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
      <ul className="section-holder">
        <li className="section-head">
          <ul className="title-holder c-hero m-b-2">
            <li className="title-text">
              <div className="ellipsis-text">Password change</div>
            </li>
            <li className="line">
              <i />
            </li>
            <li>
              <div className="accountEditButton-bc">
                <button className="btn a-minimal s-medium f-default c-primary id-start cr-round">
                  <i className="icon bc-icon-edit" />
                  <span className="ellipsis-text">Edit</span>
                </button>
              </div>
            </li>
          </ul>
        </li>
        <li className="section-body">
          <form noValidate className="grid-components-alignment">
            <div className="grid-password">
              <div className="grid-password-child">
                <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password read-only">
                  <div className="input-structure">
                    <label>
                      <div className="input-element-relative">
                        <div className="input-element read-only placeholder">
                          <div className="ellipsis-text" />
                        </div>
                      </div>
                      <div className="input-element-back">
                        <div className="input-swap-label">
                          <div className="input-swap">
                            <div className="input-swap-animate ellipsis-text hide">
                              <span className="ellipsis-text">
                                Current Password *
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                    <i className="icon showPassword bc-icon-inactivate-48 disabled" />
                  </div>
                </div>
              </div>
              <div className="grid-password-child">
                <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password read-only">
                  <div className="input-structure">
                    <label>
                      <div className="input-element-relative">
                        <div className="input-element read-only placeholder">
                          <div className="ellipsis-text" />
                        </div>
                      </div>
                      <div className="input-element-back">
                        <div className="input-swap-label">
                          <div className="input-swap">
                            <div className="input-swap-animate ellipsis-text hide">
                              <span className="ellipsis-text">
                                New Password *
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                    <i className="icon showPassword bc-icon-inactivate-48 disabled" />
                  </div>
                </div>
              </div>
              <div className="grid-password-child">
                <div className="input-holder a-minimal s-default id-start f-full-width cr-smooth-radius t-password read-only">
                  <div className="input-structure">
                    <label>
                      <div className="input-element-relative">
                        <div className="input-element read-only placeholder">
                          <div className="ellipsis-text" />
                        </div>
                      </div>
                      <div className="input-element-back">
                        <div className="input-swap-label">
                          <div className="input-swap">
                            <div className="input-swap-animate ellipsis-text hide">
                              <span className="ellipsis-text">
                                Confirm Password *
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                    <i className="icon showPassword bc-icon-inactivate-48 disabled" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
};

export { AccountPage };
