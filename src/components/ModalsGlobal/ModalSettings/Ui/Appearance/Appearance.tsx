import React, { useState } from "react";

import "./Appearance.scss";

import lightMode from "accets/images/svg/settings/light-mode.svg";
import darkMode from "accets/images/svg/settings/dark-mode.svg";
import { useTheme } from "hooks";
import { Theme } from "components";

const Appearance = () => {
  const { theme, setTheme } = useTheme();
  const handleChangetheme = (item: Theme) => {
    setTheme(item);
  };
  return (
    <div className="settingsModalWrapper-bc">
      <h3 className="settingsModalTitle-bc">
        <span>appearance</span>
      </h3>
      <div className="settingsModalVariantsWrapper-bc">
        <div className="settingsModalVariant-bc">
          <div
            className="paper bg-color with-border settingsModalVariantBlock-bc pd-row pw-nowrap jc-paper-start ai-stretch none "
            style={{ padding: "0rem" }}
          >
            <img src={lightMode} alt="light" />
          </div>
          <div
            className={`crs-holder lp-right la-start t-default ${
              theme === "light" ? "input-active" : ""
            } `}
            onClick={() => handleChangetheme("light")}
          >
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label className="ellipsis-text">light</label>
              </div>
              <div className="crs-item crs-component">
                <input
                  type="radio"
                  id="2e59131a-0d1e-2d72-3fe9-a6be3bb15988"
                  name="siteMode"
                  defaultChecked
                />
                <label
                  className={`radio cr-element s-small ${
                    theme === "light" ? "active" : ""
                  } `}
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
            <img src={darkMode} alt="dark" />
          </div>
          <div
            className={`crs-holder lp-right la-start t-default ${
              theme === "dark" ? "input-active" : ""
            } `}
            onClick={() => handleChangetheme("dark")}
          >
            <div className="label-holder has-label">
              <div className="crs-item crs-label">
                <label className="ellipsis-text">dark</label>
              </div>
              <div className="crs-item crs-component">
                <input type="radio" />
                <label
                  className={`radio cr-element s-small ${
                    theme === "dark" ? "active" : ""
                  } `}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Appearance };
