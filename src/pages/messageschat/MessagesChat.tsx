import React from "react";

import "./MessagesChat.scss";
import { FiltersAppend, Layout } from "components";

import emptyMessages from "accets/images/svg/emptyMessage.svg";

const MessagesChat = () => {
  return (
    <Layout>
      <FiltersAppend isFilterHide />
      <div className="massages-wrapper">
        <ul className="module-header cr-position-radius p-top s-big headerBorder">
          <li className="left-content">
            <div className="left-inner">
              <div className="ellipsis-text module-title" title="Messages">
                Messages
              </div>
            </div>
          </li>
          <li className="right-content" />
        </ul>
        <div className="massages-content">
          <div className="left-panel">
            <div className="left-panel-header">
              <div className="search-btn">
                <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text">
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
              </div>
              <div className="massages-w-c-left-s-button">
                <button className="btn a-default s-default f-full-width c-primary id-start cr-round">
                  <i className="icon bc-icon-plus-crm" />
                  <span className="ellipsis-text">New Message</span>
                </button>
              </div>
            </div>
            <div className="filters-actions-wrapper">
              <div className="filters dropdown-holder f-content-size a-minimal s-default">
                <div className="popover-track cursor-pointer">
                  <div className="input-holder a-minimal s-default id-start f-content-size cr-full-radius t-text filled">
                    <div className="input-structure">
                      <label>
                        <div className="input-element-relative">
                          <input
                            placeholder="Select "
                            readOnly
                            className="input-element write-protected"
                            type="text"
                            size={1}
                            defaultValue="All"
                          />
                        </div>
                        <div className="fit-content-hack">
                          <div className="input-element">Select </div>
                        </div>
                        <div className="input-element-back" />
                      </label>
                      <i className="icon bc-icon-arrow-down" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="actions">
                <button
                  className="btn a-minimal s-default f-default c-primary id-start cr-round"
                  disabled
                >
                  <span className="ellipsis-text">Read All</span>
                </button>
              </div>
            </div>
            <div className="chats-list" id="scrollableLeftPanel">
              <div className="infinite-scroll-component__outerdiv">
                <div
                  className="infinite-scroll-component "
                  style={{ height: "auto", overflow: "auto" }}
                />
              </div>
            </div>
            <div className="tabs-holder chat-tabs horizontal">
              <div className="tabs-head">
                <div className="tabs-wrapper">
                  <ul className="tabs-content type-basic">
                    <li className="active">
                      <i className="icon tab-icon bc-icon-inbox" />
                      <div className="ellipsis-text">Chats</div>
                    </li>
                    <li>
                      <i className="icon tab-icon bc-icon-crm-schedule" />
                      <div className="ellipsis-text">Scheduled</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="tabs-content-holder"
                style={{ padding: "1.9rem" }}
              />
            </div>
          </div>
          <div className="right-panel">
            <div className="emptyMessage">
              <div>
                <img src={emptyMessages} alt="empty_message" />

                <p>Select a chat to start messaging</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { MessagesChat };
