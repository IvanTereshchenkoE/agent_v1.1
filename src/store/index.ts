import { rootReducer } from "./reducers";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: rootReducer,
});

setupListeners(store.dispatch);

export { store };

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export * from "./reducers";
