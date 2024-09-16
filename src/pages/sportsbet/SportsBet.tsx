import React from "react";

import "./SportsBet.scss";
import { FiltersAppend, Layout, ModuleHeader, PaperActions, TabelHolder } from "components";
import { mockColumnsHeader } from "pages/networkusers/mockColums/mockColumnsHeader";

const SportsBet = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="paper bg-color usersTableCustomStatus networkCustomersDataTable-bc pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader name={"Sports bet"} isName isExport isSettings/>
        <PaperActions isSearch />
        <TabelHolder
          headerList={mockColumnsHeader}
          columnsList={[]}
          searchAll={false}
          noResult
        />
      </div>
    </Layout>
  );
};

export { SportsBet };
