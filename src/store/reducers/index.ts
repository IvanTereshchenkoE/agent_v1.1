import { combineReducers } from "redux";
import accountInfoSlice from "./accountInfoReducer";
import modalsSlice from "./modalsReducer";
import settingsSlice from "./settingsReducer";

const rootReducer = combineReducers({
  accountInfoReducer: accountInfoSlice.reducer,
  settingsReducer: settingsSlice.reducer,
  modalsReducer: modalsSlice.reducer,
});

export { rootReducer };

export type RootState = ReturnType<typeof rootReducer>;
