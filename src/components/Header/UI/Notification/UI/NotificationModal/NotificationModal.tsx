import React, { useState } from "react";

import "./NotificationModal.scss";

const NotificationModal = () => {
  const [notificationOff, setNotificationOff] = useState(false);
  const handleSwithcerMove = () => {
    setNotificationOff((prev) => !prev);
  };
  return (
    <div className="custom-modal-not">
      <div className="not-top-name">
        <p>Notification</p>
      </div>
      <div className="not-status-panel-container">
        <div className="crs-holder lp-right la-start">
          <div className="label-holder has-label">
            <div className="crs-item crs-label">
              <label
                className="ellipsis-text"
                htmlFor="d6537d47-8f53-7aec-15cc-508289368d16"
              >
                Show unread
              </label>
            </div>
            <div className="crs-item crs-component">
              <input
                type="checkbox"
                id="d6537d47-8f53-7aec-15cc-508289368d16"
              />
              <label
                className={`switcher-element s-small ${
                  notificationOff ? "active" : ""
                }`}
                onClick={handleSwithcerMove}
                htmlFor="d6537d47-8f53-7aec-15cc-508289368d16"
              >
                <span />
                <small />
              </label>
            </div>
          </div>
        </div>
        <button className="btn markAllButton a-minimal s-medium f-content-size c-primary id-start cr-round">
          <i className="icon bc-icon-checkbox-checked" />
          <span className="ellipsis-text">Mark all as read</span>
        </button>
      </div>
      <div className="not-list-bar">
        <li className="not-list-item-container">
          <div className="not-list-item-data">2023-11-02 15:04:31</div>
          <div className="not-list-item-info">
            100 EUR amount has been transferred to your Credit Line
          </div>
        </li>
      </div>
    </div>
  );
};

export { NotificationModal };
