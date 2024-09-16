import React, { useState } from "react";

import "./UserHeader.scss";
import { Link } from "react-router-dom";
import { DefaultForm } from "./forms";
import { useModalMove } from "hooks";

const UserHeader = () => {
  //   const [isHovered, setIsHovered] = useState(false);
  const { modalOpen, wrapperRef, setModalOpen } = useModalMove();
  const [formType, setFormType] = useState("default");
  const handleIsHovered = () => {
    setModalOpen((prev) => !prev);
  };
  return (
    <div className="custom-container custom-container-header" ref={wrapperRef}>
      <div className="cursor-pointer" onClick={handleIsHovered}>
        <div className="user-profile-c cursor-pointer">
          <div className="user-avatar-c size-default color-default shape-circle bc-icon-user clickable" />
          <p className="user-profile-text ellipsis-text">pefaco@gmail.com</p>
          <i className="icon bc-icon-arrow-down" />
        </div>
      </div>
      {modalOpen ? (
        <>
          <DefaultForm setModalOpen={setModalOpen} />
        </>
      ) : null}
    </div>
  );
};

export { UserHeader };
