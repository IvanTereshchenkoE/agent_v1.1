import React from "react";

import "./ReportsRefferal.scss";
import {
  Layout,
  FiltersAppend,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";
import { mockColumnsHeader } from "pages/networkusers/mockColums/mockColumnsHeader";

const ReportsRefferal = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="paper bg-color usersTableCustomStatus networkCustomersDataTable-bc pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader name={"Refferal Report"} isName isExport isSettings />
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

export { ReportsRefferal };
