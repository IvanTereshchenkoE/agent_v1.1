import React, { useState } from "react";

import "./WholeNetwork.scss";
import { WholeModal } from "./UI";
import { useModalMove } from "hooks";

const WholeNetwork = () => {
  const [selectedModal, setSelectedModal] = useState("Whole Network");
  const handleModalMove = () => {
    setModalOpen((prev) => !prev);
  };
  const { modalOpen, wrapperRef, setModalOpen } = useModalMove();
  return (
    <div
      className="paper bg-transparent filters pd-row pw-nowrap jc-paper-start ai-center none custom-whole-container"
      style={{ padding: "0rem" }}
    >
      <div className="dashboardTotalsFilterDropdown-bc" ref={wrapperRef}>
        <div className="dropdown-holder f-full-width a-outline s-default mobile-view">
          <div className="popover-track cursor-pointer">
            <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-text filled">
              <div className="input-structure" onClick={handleModalMove}>
                <label>
                  <div className="input-element-relative">
                    <input
                      placeholder="Data "
                      readOnly
                      value={selectedModal}
                      className="input-element write-protected"
                      type="text"
                    />
                  </div>
                  <div className="input-element-back" />
                </label>
                <i className="icon bc-icon-arrow-down" />
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
        <WholeModal
          selectedModal={selectedModal}
          setSelectedModal={setSelectedModal}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
        />
      )}
      </div>
      
    </div>
  );
};

export { WholeNetwork };
