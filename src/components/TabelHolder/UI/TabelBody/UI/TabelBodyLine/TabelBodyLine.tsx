import React from "react";

import "./TabelBodyLine.scss";
import { mockColumnsUsersType } from "pages/networkusers/mockColums/mockColumnsUsers";
import {
  ActivePlayersButton,
  DefaultLine,
  SearchButton,
  TagLine,
  UsersButton,
} from "./UI";
import { mockColumnsPlayersType } from "pages/activeplayers/mockColums/mockColumnsPlayers";
import { BalanceLine } from "./UI/BalanceLine/BalanceLine";

interface ITabelBodyLine {
  index: number;
  lineInfo: mockColumnsUsersType | mockColumnsPlayersType;
  widthHeader: number;
  searchAll?: boolean;
  page?: string;
}

const TabelBodyLine = ({
  index,
  lineInfo,
  widthHeader,
  searchAll,
  page,
}: ITabelBodyLine) => {
  return (
    <div
      className="ta-group"
      data-index={0}
      style={{
        height: "51px",
        left: "0px",
        position: "absolute",
        top: `${index * 51}px`,
        width: "100%",
      }}
    >
      <div className="ta-row hover-able border-bottom">
        <div className="ta-gr-left-line" />
        {searchAll && <SearchButton />}
        {Object.keys(lineInfo).map((item) => {
          return (
            <>
              {lineInfo.plantype !== lineInfo[item] &&
                lineInfo.Balance !== lineInfo[item] && (
                  <DefaultLine
                    name={lineInfo[item]}
                    widthHeader={widthHeader}
                  />
                )}
              {lineInfo.plantype === lineInfo[item] && (
                <TagLine name={lineInfo[item]} widthHeader={widthHeader} />
              )}
              {lineInfo.Balance === lineInfo[item] && (
                <BalanceLine name={lineInfo[item]} widthHeader={widthHeader} />
              )}
            </>
          );
        })}
        <div className="ta-cell right-actions-holder a-square">
          <div className="ta-action ta-a-1">
            <div className="ta-item">
              <button className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon">
                <i className="icon bc-icon-more-horizontal" />
              </button>
            </div>
          </div>
          {page === "users" && <UsersButton />}
          {page === "activePlayers" && <ActivePlayersButton />}
        </div>
      </div>
    </div>
  );
};

export { TabelBodyLine };
