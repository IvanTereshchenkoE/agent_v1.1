import React from "react";

import "./DeletedUsers.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";

import { mockColumnsHeader } from "./mockColums/mockColumnsHeader";

const DeletedUsers = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="paper bg-color usersTableCustomStatus networkCustomersDataTable-bc pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader name={"Deleted Users"} isName />
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

export { DeletedUsers };
