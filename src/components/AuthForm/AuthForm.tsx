import React, { useState } from "react";

import "./AuthForm.scss";
import { InputPassword, InputUsername } from "./UI";
import { useDispatch } from "react-redux";
import { setAuth } from "store/reducers/accountInfoReducer";

const AuthForm = () => {
  const dispatch = useDispatch();
  const [passwordValue, setPasswordValue] = useState("Zorair2023@");
  const [usernameValue, setUsernameValue] = useState("pefaco@gmail.com");
  const handleLogin = () => {
    if (
      usernameValue === "pefaco@gmail.com" &&
      passwordValue === "Zorair2023@"
    ) {
      dispatch(setAuth("auth"));
      console.log("success");
    }
  };
  return (
    <div className="agentSignBlockFormWrapper-bc">
      <form>
        <InputUsername value={usernameValue} setValue={setUsernameValue} />
        <InputPassword value={passwordValue} setValue={setPasswordValue} />
      </form>
      <button
        className="btn login-holder-item-wrap-button a-default s-big f-full-width c-primary id-start cr-round"
        disabled={false}
        style={{
          backgroundColor: "rgb(216, 28, 19)",
          color: "rgb(255, 255, 255)",
        }}
        onClick={handleLogin}
      >
        <span className="ellipsis-text">Iniciar Sesión</span>
      </button>
    </div>
  );
};

export { AuthForm };
