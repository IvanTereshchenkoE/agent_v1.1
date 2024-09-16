import React from "react";

import "./ReportsTransaction.scss";
import {
  Layout,
  FiltersAppend,
  ModuleHeader,
  ReportsHeader,
  PaperActions,
  TabelGeneral,
} from "components";
import { mockColumnsHeader } from "pages/networkusers/mockColums/mockColumnsHeader";
import { mockColumnsHeaderSecond } from "pages/reportsgeneral/mockColumsUsers/mockColumnsHeaderSecond";
import { mockColumnsHeaderUser } from "pages/reportsgeneral/mockColumsUsers/mockColumnsHeaderUser";
import { useParams } from "react-router-dom";

const reportsHeaderMock = [
  { href: "/reports/transactionReport/transactions", pageName: "transactions" },
  { href: "/reports/transactionReport/agents", pageName: "agents" },
  { href: "/reports/transactionReport/players", pageName: "players" },
];

const filterList = [
  "Date 2023/12/01 00:00:00 - 2023/12/10 16:53:31",
  "Currency = EUR",
  "Players = Only active players",
  "Affiliate Id = 1063512",
];

const ReportsTransaction = () => {
  const { reportsPage } = useParams();
  return (
    <Layout>
      <FiltersAppend filterList={filterList} />
      <div className="page-inner-body">
        <ModuleHeader isName name="Transaction Reports" />
        <div className="page-inner-content users-page">
          <div className="reportBody-bc">
            <div className="tabs-holder horizontal">
              <ReportsHeader headerList={reportsHeaderMock} />
              <div
                className="tabs-content-holder c-type-box"
                style={{ padding: "0rem" }}
              >
                <div
                  className="paper bg-color pd-column pw-nowrap jc-paper-start ai-stretch full-radius with-shadow"
                  style={{ padding: "0rem" }}
                >
                  {reportsPage === "transactions" && (
                    <ModuleHeader
                      isName
                      isSettings
                      name={"Transactions Report"}
                    />
                  )}
                  {reportsPage === "agents" && (
                    <ModuleHeader
                      isName
                      isSettings
                      isExport
                      name={"Agents-Report"}
                    />
                  )}
                  {reportsPage === "players" && (
                    <ModuleHeader
                      isName
                      isSettings
                      isExport
                      name={"Players Report"}
                    />
                  )}
                  <PaperActions />
                  {reportsPage === "transactions" && (
                    <TabelGeneral
                      headerList={mockColumnsHeader}
                      headerListSecond={mockColumnsHeaderSecond}
                    />
                  )}
                  {reportsPage === "agents" && (
                    <TabelGeneral headerList={mockColumnsHeaderUser} />
                  )}
                  {reportsPage === "players" && (
                    <TabelGeneral headerList={mockColumnsHeaderUser} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { ReportsTransaction };
