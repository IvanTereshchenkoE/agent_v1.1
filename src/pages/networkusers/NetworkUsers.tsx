import React from "react";

import "./NetworkUsers.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  PaperActions,
  TabelHolder,
} from "components";

import { mockColumnsHeader } from "./mockColums/mockColumnsHeader";
import { mockColumnsUsers } from "./mockColums/mockColumnsUsers";

const NetworkUsers = () => {
  return (
    <Layout>
      <FiltersAppend />
      <div className="paper bg-color usersTableCustomStatus networkCustomersDataTable-bc pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow">
        <ModuleHeader name={"Users"} isName isExport isSettings />
        <PaperActions name="Add User" isButton isSearch />
        <TabelHolder
          headerList={mockColumnsHeader}
          columnsList={mockColumnsUsers}
          searchAll
          noResult={false}
          page="users"
          isFooter={true}
        />
      </div>
    </Layout>
  );
};

export { NetworkUsers };
