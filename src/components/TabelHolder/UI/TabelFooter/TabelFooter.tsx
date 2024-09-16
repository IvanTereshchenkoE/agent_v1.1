import React from "react";

import "./TabelFooter.scss";
import { mockColumnsUsersType } from "pages/networkusers/mockColums/mockColumnsUsers";
import { mockColumnsPlayersType } from "pages/activeplayers/mockColums/mockColumnsPlayers";

interface ITabelFooter {
  columListFresh: mockColumnsUsersType[] | mockColumnsPlayersType[];
  widthHeader: number;
}

const TabelFooter = ({ columListFresh, widthHeader }: ITabelFooter) => {
  return (
    <div className="ta-n-body ta-footer">
      <div className="ta-row border-top">
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text">Total</div>
        </div>
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text" />
        </div>
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text" />
        </div>
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text" />
        </div>
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text" />
        </div>
        <div
          className="ta-cell ta-footer"
          style={{ left: 0, right: 0, width: widthHeader }}
        >
          <div className="ellipsis-text">0.00</div>
        </div>
        <div className="ta-cell right-actions-holder a-square" />
      </div>
    </div>
  );
};

export { TabelFooter };
