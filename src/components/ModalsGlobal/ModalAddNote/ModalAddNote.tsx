import React from "react";

import "./ModalAddNote.scss";
import { useDispatch } from "react-redux";
import { setModalAddNote } from "store/reducers/modalsReducer";

const ModalAddNote = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setModalAddNote(false));
  };
  return (
    <div
      className="modal-splash light-background a-default p-center"
      style={{ zIndex: "400" }}
    >
      <div className="modal-content s-content-size">
        <div className="modal-head">
          <div className="ellipsis-text">Add Note</div>
        </div>
        <div className="modal-body">
          <form noValidate className="addNoteForm-bc">
            <div className="input-holder a-outline s-default id-start f-full-width cr-full-radius t-textarea">
              <div className="input-structure">
                <label>
                  <div className="input-element-relative">
                    <textarea
                      placeholder="Type your note here "
                      className="input-element placeholder textarea-element"
                      name="b0c7b3e4-f392-9f15-0b0e-96832ef8e686"
                      defaultValue={""}
                    />
                  </div>
                  <div className="input-element-back">
                    <div className="input-swap-label">
                      <div className="input-swap">
                        <div className="input-swap-animate ellipsis-text hide">
                          <span className="ellipsis-text">
                            Type your note here{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            className="btn a-minimal s-medium f-default c-default id-start cr-round"
            onClick={handleCloseModal}
          >
            <span className="ellipsis-text">Cancel</span>
          </button>
          <button
            className="btn a-default s-medium f-default c-primary id-start cr-round"
            onClick={handleCloseModal}
          >
            <span className="ellipsis-text">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export { ModalAddNote };
