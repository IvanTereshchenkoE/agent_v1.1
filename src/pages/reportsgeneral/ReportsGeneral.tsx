import React from "react";

import "./ReportsGeneral.scss";
import {
  FiltersAppend,
  Layout,
  ModuleHeader,
  PaperActions,
  ReportsHeader,
  TabelGeneral,
} from "components";
import { mockColumnsHeader } from "./mockColumsProducts/mockColumnsHeader";
import { useParams } from "react-router-dom";
import { mockColumnsHeaderUser } from "./mockColumsUsers/mockColumnsHeaderUser";
import { mockColumnsHeaderSecond } from "./mockColumsUsers/mockColumnsHeaderSecond";

const reportsHeaderMock = [
  { href: "/reports/productsReport/products", pageName: "products" },
  { href: "/reports/productsReport/users", pageName: "users" },
  { href: "/reports/productsReport/players", pageName: "players" },
];

const filterList = [
  "Reporting currency = EUR",
  "Date 2023/12/01 - 2023/12/10",
  "Players = Only active players",
];

const ReportsGeneral = () => {
  const { reportsPage } = useParams();
  return (
    <Layout>
      <FiltersAppend filterList={filterList} />
      <div className="page-inner-body">
        <ModuleHeader isName name="General Reports" />
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
                  {reportsPage === "products" && (
                    <ModuleHeader isName isSettings name={"Products Report"} />
                  )}
                  {reportsPage === "users" && (
                    <ModuleHeader
                      isName
                      isSettings
                      isExport
                      name={"Users report"}
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
                  {reportsPage === "products" && (
                    <TabelGeneral headerList={mockColumnsHeader} />
                  )}
                  {reportsPage === "users" && (
                    <TabelGeneral
                      headerList={mockColumnsHeaderUser}
                      headerListSecond={mockColumnsHeaderSecond}
                    />
                  )}
                  {reportsPage === "players" && (
                    <TabelGeneral
                      headerList={mockColumnsHeaderUser}
                      headerListSecond={mockColumnsHeaderSecond}
                    />
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

export { ReportsGeneral };
