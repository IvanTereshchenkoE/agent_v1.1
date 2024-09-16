import React from "react";

import "./AuthPage.scss";

import logo from "accets/images/png/logoAgent-overwrite.png";
import { AuthForm } from "components";

const AuthPage = () => {
  return (
    <div className="agentSignBlockWrapper-bc agent-sign-back">
      <div className="agentSignBlockHeader-bc agent-header-custom">
        <img src={logo} alt="logo" />
      </div>
      <div className="agentWelcomeWrapper">
        <div className="agentSignBlockTextBlock-bc">
          <div>
            <h2 className="agentSignBlockTextHeader-bc">Bienvenido!</h2>
            <p className="agentSignBlockTextParagraph-bc">
              Haga crecer su negocio e ingresos de una manera fácil, eficiente y
              rentable
            </p>
          </div>
        </div>
        <div className="agentSignBlockBody-bc">
          <div className="agentSignBlockTitleGroup-bc">
            <h2 className="agentSignBlockTitle-bc">
              Iniciar sesión en su cuenta
            </h2>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export { AuthPage };
