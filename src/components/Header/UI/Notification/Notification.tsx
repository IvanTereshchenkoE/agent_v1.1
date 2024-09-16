import React, { useState } from "react";

import "./Notification.scss";
import { NotificationModal } from "./UI";
import { useModalMove } from "hooks";

const Notification = () => {
  const { handleOpenModal, modalOpen, wrapperRef, setModalOpen } =
    useModalMove();
  return (
    <div
      className="headerNavIcon-bc custom-notification-container"
      ref={wrapperRef}
    >
      <div
        className="badge-holder cursor-pointer size-default"
        onClick={handleOpenModal}
      >
        <i className="icon bc-icon-send-push-notification-block" />
      </div>
      {modalOpen && <NotificationModal />}
    </div>
  );
};

export { Notification };
