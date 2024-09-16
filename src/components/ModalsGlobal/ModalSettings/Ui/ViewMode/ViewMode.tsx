import React, { useState } from "react";

import "./ViewMode.scss";

const ViewMode = () => {
  const [selectedView, setSelectedView] = useState("large");
  const handleSelectView = (item: string) => {
    setSelectedView(item);
  };
  return (
    <div className="settingsModalWrapper-bc">
      <h3 className="settingsModalTitle-bc">
        <span>view-mode</span>
      </h3>
      <div className="settingsModalVariantsWrapper-bc">
        <div className="settingsModalVariant-bc">
          <div
            className="paper bg-color with-border settingsModalVariantBlock-bc pd-row pw-nowrap jc-paper-start ai-stretch none"
            style={{ padding: "0rem" }}
          >
            <span>small</span>
          </div>
          <div className="crs-holder lp-right la-start t-default">
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label
                  className="ellipsis-text"
                  htmlFor="a46550a6-d107-5c48-7ae3-c061817ad874"
                >
                  small
                </label>
              </div>
              <div className="crs-item crs-component">
                <input
                  type="radio"
                  id="a46550a6-d107-5c48-7ae3-c061817ad874"
                  name="fontSize"
                />
                <label
                  className="radio cr-element s-small"
                  htmlFor="a46550a6-d107-5c48-7ae3-c061817ad874"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="settingsModalVariant-bc">
          <div
            className="paper bg-color with-border settingsModalVariantBlock-bc pd-row pw-nowrap jc-paper-start ai-stretch none "
            style={{ padding: "0rem" }}
          >
            <span>normal</span>
          </div>
          <div className="crs-holder lp-right la-start t-default">
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label
                  className="ellipsis-text"
                  htmlFor="de8353dc-328e-b0bc-dae1-8f7e159a094a"
                >
                  normal
                </label>
              </div>
              <div className="crs-item crs-component">
                <input
                  type="radio"
                  id="de8353dc-328e-b0bc-dae1-8f7e159a094a"
                  name="fontSize"
                />
                <label
                  className="radio cr-element s-small"
                  htmlFor="de8353dc-328e-b0bc-dae1-8f7e159a094a"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="settingsModalVariant-bc">
          <div
            className="paper bg-color with-border settingsModalVariantBlock-bc pd-row pw-nowrap jc-paper-start ai-stretch none "
            style={{ padding: "0rem" }}
          >
            <span>large</span>
          </div>
          <div className="crs-holder lp-right la-start t-default input-active">
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label
                  className="ellipsis-text"
                  htmlFor="ae0aea11-b0de-bda8-c402-7c6f39ca5686"
                >
                  large
                </label>
              </div>
              <div className="crs-item crs-component">
                <input
                  type="radio"
                  id="ae0aea11-b0de-bda8-c402-7c6f39ca5686"
                  name="fontSize"
                  defaultChecked
                />
                <label
                  className="radio cr-element s-small active"
                  htmlFor="ae0aea11-b0de-bda8-c402-7c6f39ca5686"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ViewMode };
