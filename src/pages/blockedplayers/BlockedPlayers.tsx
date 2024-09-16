import React from "react";

import "./BlockedPlayers.scss";
import {
  Layout,
  FiltersAppend,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";

import { mockColumnsHeader } from "./mockColums/mockColumnsHeader";

const BlockedPlayers = () => {
  return (
    <Layout>
      <div className="active-players-hk">
        <div className="paper bg-color pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
          <ModuleHeader isName isRefresh name="Blocked Players" />
          <PaperActions isSearch />
          <TabelHolder
            headerList={mockColumnsHeader}
            columnsList={[]}
            searchAll={false}
            page="activePlayers"
          />
        </div>
      </div>
    </Layout>
  );
};

export { BlockedPlayers };
