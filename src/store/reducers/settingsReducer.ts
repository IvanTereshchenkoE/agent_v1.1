import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Language {
  languageShort: string;
  languageAbs: string;
  languageFlag: string;
  languageName: string;
}

interface SettingsState {
  oddsFormat: string;
  language: Language;
  timeFormat: string;
  showRedirectInfo: boolean;
}

const initialState: SettingsState = {
  oddsFormat: "Decimal",
  language: {
    languageShort: "tr",
    languageAbs: "TRY",
    languageFlag: "turkey",
    languageName: "Türkçe",
  },
  timeFormat: "24h",
  showRedirectInfo: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setOddsFormat: (state, action: PayloadAction<string>) => {
      state.oddsFormat = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setTimeFormat: (state, action: PayloadAction<string>) => {
      state.timeFormat = action.payload;
    },
    changeRedirectInfo: (state, action: PayloadAction<boolean>) => {
      state.showRedirectInfo = action.payload;
    },
  },
});

export const { setOddsFormat, setLanguage, setTimeFormat, changeRedirectInfo } =
  settingsSlice.actions;
export default settingsSlice;

export type { Language };
