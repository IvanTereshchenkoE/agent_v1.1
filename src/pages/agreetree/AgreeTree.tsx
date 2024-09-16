import React from "react";

import "./AgreeTree.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  TabelHolderTree,
} from "components";

const AgreeTree = () => {
  return (
    <Layout>
      <FiltersAppend filterList={["Wallet currency = multi"]} />
      <div className="subUsersPageMainWRapper-bc">
        <ModuleHeader name={"Agent Tree"} isExport isName />
        <TabelHolderTree />
      </div>
    </Layout>
  );
};

export { AgreeTree };
