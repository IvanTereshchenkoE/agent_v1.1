import React from "react";

import "./ReportsActivities.scss";
import {
  Layout,
  FiltersAppend,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";
import { mockColumnsHeader } from "pages/networkusers/mockColums/mockColumnsHeader";

const ReportsActivities = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="paper bg-color usersTableCustomStatus networkCustomersDataTable-bc pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader name={"Activities by Users"} isName isExport isSettings />
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

export { ReportsActivities };
