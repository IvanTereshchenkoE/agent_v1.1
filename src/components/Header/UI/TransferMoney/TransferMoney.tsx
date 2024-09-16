import React from "react";

import "./TransferMoney.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setModalTransferChose } from "store/reducers/modalsReducer";

const TransferMoney = () => {
  const dispatch = useDispatch();
  const handleModalOpen = () => {
    dispatch(setModalTransferChose(true));
  };
  return (
    <div className="headerNavIcon-bc cursor-pointer" onClick={handleModalOpen}>
      <span>
        <i className="icon bc-icon-transfer-bold" />
      </span>
    </div>
  );
};
export { TransferMoney };
