import React, { useEffect, useState } from "react";

import "./InputPassword.scss";

interface IInputPassword {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const InputPassword = ({ value, setValue }: IInputPassword) => {
  const [validError, setValidError] = useState(false);
  const [isPassword, setIsPassword] = useState(true);
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };
  const handleChangePasswordHide = () => {
    setIsPassword((prev) => !prev);
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
      className={`input-holder a-outline s-big id-start f-full-width cr-full-radius t-password pass-input ${
        validError ? "error-color" : ""
      }`}
    >
      <div className="input-structure">
        <i className="icon bc-icon-permission-48" />
        <label>
          <div className="input-element-relative">
            <input
              placeholder="Password *"
              className={`input-element placeholder input-custom ${
                value.length ? "placeholder" : ""
              }`}
              value={value}
              onChange={onChangeValue}
              type={isPassword ? "password" : "text"}
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
                  <span className="ellipsis-text">Password *</span>
                </div>
              </div>
            </div>
          </div>
        </label>
        <i
          className="icon showPassword bc-icon-inactivate-48"
          onClick={handleChangePasswordHide}
        />
      </div>
      {validError && (
        <div className="information-message color-danger">
          Este campo es obligatorio
        </div>
      )}
    </div>
  );
};

export { InputPassword };
