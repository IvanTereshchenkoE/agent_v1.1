import React from "react";

import "./Filters.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";
import { mockColumnsHeader } from "./mockColums/mockColumnsHeader";

const Filters = () => {
  return (
    <Layout>
      <FiltersAppend isFilterHide />
      <div className="paper bg-color pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader isName name="Filters" />
        <PaperActions />
        <TabelHolder
          headerList={mockColumnsHeader}
          columnsList={[]}
          searchAll={false}
          page="filters"
        />
      </div>
    </Layout>
  );
};

export { Filters };
