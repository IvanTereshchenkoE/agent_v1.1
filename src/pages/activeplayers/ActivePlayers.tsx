import React from "react";

import "./ActivePlayers.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";

import { mockColumnsHeader } from "./mockColums/mockColumnsHeader";
import { mockColumnsPlayers } from "./mockColums/mockColumnsPlayers";

const ActivePlayers = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="active-players-hk">
        <div className="paper bg-color pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
          <ModuleHeader isName isExport isSettings name="Active Players" />
          <PaperActions isButton isSearch name="Add Player" />
          <TabelHolder
            headerList={mockColumnsHeader}
            columnsList={mockColumnsPlayers}
            searchAll={false}
            page="activePlayers"
          />
        </div>
      </div>
    </Layout>
  );
};

export { ActivePlayers };
