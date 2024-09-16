import React from "react";

import "./AddUser.scss";
import { useDispatch } from "react-redux";
import { setModalAddUser } from "store/reducers/modalsReducer";

const AddUser = () => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(setModalAddUser(true));
  };
  return (
    <div className="headerNavIcon-bc cursor-pointer" onClick={handleOpenModal}>
      <span>
        <i className="icon bc-icon-add-user" />
      </span>
    </div>
  );
};

export { AddUser };
