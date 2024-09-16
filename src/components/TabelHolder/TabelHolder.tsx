import React, { useEffect, useState } from "react";

import "./TabelHolder.scss";
import {
  TabelBody,
  TabelEmpty,
  TabelFooter,
  TabelHeader,
  TabelLoader,
  TabelNoResult,
} from "./UI";
import { mockColumnsHeaderType } from "pages/networkusers/mockColums/mockColumnsHeader";
import { mockColumnsUsersType } from "pages/networkusers/mockColums/mockColumnsUsers";
import { TabelPagination } from "components";
import { mockColumnsPlayersType } from "pages/activeplayers/mockColums/mockColumnsPlayers";
import { useWindow } from "hooks";

interface ITabelHolder {
  headerList: mockColumnsHeaderType[];
  columnsList: mockColumnsUsersType[] | mockColumnsPlayersType[];
  searchAll?: boolean;
  noResult?: boolean;
  page?: string;
  isFooter?: boolean;
}

const TabelHolder = ({
  headerList,
  columnsList,
  searchAll,
  page,
  isFooter,
}: ITabelHolder) => {
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [columListFresh, setColumListFresh] = useState<
    mockColumnsUsersType[] | mockColumnsPlayersType[]
  >([]);
  const loadData = () => {
    setLoading(true);
    setColumListFresh(columnsList);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    if (columnsList.length === 0) {
      setEmpty(true);
    }
  };
  useEffect(() => {
    if (columnsList.length === 0) {
      setEmpty(true);
    }
  }, []);

  const { screenWidth } = useWindow();
  const [widthHeader, setWidthHeader] = useState(150);
  useEffect(() => {
    let midiatleWidth = screenWidth / headerList.length - headerList.length;
    midiatleWidth = screenWidth / headerList.length - headerList.length;
    if (midiatleWidth > 150) {
      setWidthHeader(midiatleWidth);
    } else {
      setWidthHeader(150);
    }
  }, [screenWidth]);
  return (
    <div
      className={`table-holder ${
        columListFresh.length === 0 ? "content-empty" : ""
      }`}
    >
      <div
        className="scroll-holder s-medium"
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          minHeight: 0,
          maxHeight: 5000,
        }}
      >
        <div
          className="scroll-content"
          style={{
            position: "relative",
            overflow: "scroll",
          }}
        >
          <TabelHeader
            headerList={headerList}
            searchAll={searchAll}
            widthHeader={widthHeader}
          />
          <div className="ta-body">
            {columListFresh.length === 0 && !empty && (
              <TabelEmpty loadData={loadData} />
            )}
            {columListFresh.length > 0 && !empty && (
              <TabelBody
                tableList={columListFresh}
                widthHeader={widthHeader}
                searchAll={searchAll}
                page={page}
              />
            )}
            {empty && <TabelNoResult />}
          </div>
          {columListFresh.length > 0 && !empty && isFooter && (
            <TabelFooter
              columListFresh={columListFresh}
              widthHeader={widthHeader}
            />
          )}
        </div>
      </div>
      {columListFresh.length > 0 && !empty && (
        <TabelPagination tabelCount={columListFresh.length} />
      )}
      {loading && <TabelLoader />}
    </div>
  );
};

export { TabelHolder };
