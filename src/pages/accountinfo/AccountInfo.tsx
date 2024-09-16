import React from "react";

import "./AccountInfo.scss";
import { AccountHeader, AccountPages, FiltersAppend, Layout } from "components";

const AccountInfo = () => {
  return (
    <Layout>
      <FiltersAppend isFilterHide />
      <AccountHeader />
      <AccountPages />
    </Layout>
  );
};

export { AccountInfo };
