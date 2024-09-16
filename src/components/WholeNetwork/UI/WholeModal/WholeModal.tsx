import React from "react";

import "./WholeModal.scss";

interface IWholeModal {
  selectedModal: string;
  setSelectedModal: React.Dispatch<React.SetStateAction<string>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WholeModal = ({
  selectedModal,
  setSelectedModal,
  modalOpen,
  setModalOpen,
}: IWholeModal) => {
  const handleSelectModal = (item: string) => {
    setSelectedModal(item);
    setModalOpen(false);
  };
  return (
    <div className="whole-modal-container">
      <div
        className="popover-positioner cr-full-radius"
        style={{
          top: "0px",
          left: "0px",
        }}
      >
        <div>
          <ul
            className="popover-content"
            style={{ bottom: "0px", width: "312px" }}
          >
            <li className="popover-body">
              <div
                className="scroll-holder s-medium"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  width: "100%",
                  height: "auto",
                  minHeight: "0px",
                  maxHeight: "216px",
                }}
              >
                <div
                  className="scroll-content"
                  style={{
                    position: "relative",
                    minHeight: "16px",
                    maxHeight: "232px",
                  }}
                >
                  <div className="popover-top-bottom-padding">
                    <div style={{ overflow: "visible", width: "0px" }}>
                      <div
                        aria-label="grid"
                        aria-readonly="true"
                        className="ReactVirtualized__Grid ReactVirtualized__List"
                        role="grid"
                        tabIndex={0}
                        style={{
                          boxSizing: "border-box",
                          direction: "ltr",
                          height: "auto",
                          position: "relative",
                          width: "312px",
                          willChange: "transform",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="ReactVirtualized__Grid__innerScrollContainer"
                          role="rowgroup"
                          style={{
                            width: "auto",
                            height: "80px",
                            maxWidth: "312px",
                            maxHeight: "80px",
                            overflow: "hidden",
                            position: "relative",
                          }}
                        >
                          <div
                            className={`dropdown-item ${
                              selectedModal === "Whole Network"
                                ? "selected"
                                : ""
                            }`}
                            // hovered
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "0px",
                              width: "100%",
                            }}
                            onClick={() => handleSelectModal("Whole Network")}
                          >
                            <p title="Whole Network">
                              <span>Whole Network</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                          <div
                            className={`dropdown-item ${
                              selectedModal === "Direct Players"
                                ? "selected"
                                : ""
                            }`}
                            style={{
                              height: "40px",
                              left: "0px",
                              position: "absolute",
                              top: "40px",
                              width: "100%",
                            }}
                            onClick={() => handleSelectModal("Direct Players")}
                          >
                            <p title="Direct Players">
                              <span>Direct Players</span>
                            </p>
                            <small className="icon bc-icon-selected" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { WholeModal };
