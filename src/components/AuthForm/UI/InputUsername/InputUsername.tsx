import React, { useEffect, useState } from "react";

import "./InputUsername.scss";

interface IInputPassword {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputUsername = ({ value, setValue }: IInputPassword) => {
  const [validError, setValidError] = useState(false);
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    if (value.length > 0) {
      setValidError(false);
    } else {
      setValidError(true);
    }
  }, [value]);
  return (
    <div
      className={`input-holder a-outline s-big id-start f-full-width cr-full-radius t-text email-input ${
        validError ? "error-color" : ""
      }`}
    >
      <div className="input-structure">
        <i className="icon bc-icon-user" />
        <label>
          <div className="input-element-relative">
            <input
              placeholder="Username *"
              className={`input-element ${value.length ? "placeholder" : ""}`}
              value={value}
              onChange={onChangeValue}
              type="text"
            />
          </div>
          <div className="input-element-back">
            <div className="input-swap-label">
              <div className="input-swap">
                <div
                  className={`input-swap-animate ellipsis-text ${
                    value.length ? "" : "hide"
                  }`}
                >
                  <span className="ellipsis-text">Username *</span>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
      {validError && (
        <div className="information-message color-danger">
          Este campo es obligatorio
        </div>
      )}
    </div>
  );
};

export { InputUsername };
