import React, { useEffect, useState } from "react";

import "./Layout.scss";
import {
  Header,
  Loader,
  ModalAddAgent,
  ModalAddNote,
  ModalAddPlayer,
  ModalAddUser,
  ModalFilters,
  ModalResetPassword,
  ModalSettings,
  ModalTransferMoney,
  ModelTransferChose,
  ModulSavedFilters,
  SideFilter,
} from "components";
import { DefaultContainers, GrandContainer } from "./components";
import { useTypeSelector } from "hooks";

interface ILayout {
  children: React.ReactNode;
  isGrandContainer?: boolean;
  isSideFilterNone?: boolean;
}

const Layout = ({ children, isGrandContainer, isSideFilterNone }: ILayout) => {
  const [loading, setLoading] = useState(true);
  const {
    modalAddNore,
    modalTransferChose,
    modalTransferMoney,
    modalAddUser,
    modalAddAgent,
    modalAddPlayer,
    modalSettings,
    modalResetPassword,
    modalSavedFilters,
    modalFiltres,
  } = useTypeSelector((item) => item.modalsReducer);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <div className="grand-parent">
      <Header />
      <div id="subHeaderPortal" />
      <section id="holderAppend" className="grand-body">
        {!isGrandContainer && (
          <DefaultContainers loading={loading} children={children} />
        )}
        {isGrandContainer && <GrandContainer children={children} />}
        {isGrandContainer || isSideFilterNone ? null : <SideFilter />}
        {isGrandContainer && loading && <Loader />}
      </section>
      {modalAddNore && <ModalAddNote />}
      {modalTransferChose && <ModelTransferChose />}
      {modalTransferMoney && <ModalTransferMoney />}
      {modalAddUser && <ModalAddUser />}
      {modalAddAgent && <ModalAddAgent />}
      {modalAddPlayer && <ModalAddPlayer />}
      {modalSettings && <ModalSettings />}
      {modalResetPassword && <ModalResetPassword />}
      {modalSavedFilters && <ModulSavedFilters />}
      {modalFiltres && <ModalFilters />}
    </div>
  );
};

export { Layout };
