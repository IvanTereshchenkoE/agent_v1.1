import React, { createContext, useEffect, useState } from "react";
import "./App.scss";
import { Navigation } from "navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "store";
import { ThemeProvider } from "components";

function App() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
