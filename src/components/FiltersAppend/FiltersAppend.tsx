import React from "react";

import "./FiltersAppend.scss";
import { FilterItem } from "./UI";
import { useDispatch } from "react-redux";
import { setModalSavedFilters } from "store/reducers/modalsReducer";

interface IFiltersAppend {
  filterList?: string[];
  isFilterHide?: boolean;
}

const FiltersAppend = ({ filterList, isFilterHide }: IFiltersAppend) => {
  const dispatch = useDispatch();
  const handleOpenSavedFilters = () => {
    dispatch(setModalSavedFilters(true));
  };
  return (
    <div id="filtersAppend" className="body-head">
      {isFilterHide ? null : (
        <div
          className="paper bg-color containerPape pd-row pw-nowrap jc-space-between ai-center full-radius with-shadow custom-paper"
          style={{ padding: "1.5rem 2rem 0rem" }}
        >
          <div
            className="scroll-holder s-medium"
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              className="scroll-content"
              style={{
                position: "absolute",
                inset: 0,
                overflow: "scroll",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div className="horizontalContainer">
                {filterList?.map((item) => (
                  <FilterItem filterName={item} />
                ))}
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div
              className="paper bg-color pd-row pw-nowrap jc-paper-start ai-center none"
              style={{ padding: "0rem" }}
            >
              <div className="divider type-vertical"></div>
              <button
                className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
                disabled
                title="Save Filter"
              >
                <i className="icon bc-icon-save"></i>
              </button>
              <button
                className="btn a-minimal s-big f-default c-primary id-start cr-round c-icon"
                title="Saved filters"
                onClick={handleOpenSavedFilters}
              >
                <i className="icon bc-icon-filter-list"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { FiltersAppend };
