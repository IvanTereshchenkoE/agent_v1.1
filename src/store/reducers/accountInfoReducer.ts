import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userInfo {
  email: string;
  id: string;
}

interface stateUser {
  role: string;
}

const initialState: stateUser = {
  role: "unauth",
};

const accountInfoSlice = createSlice({
  name: "accountInfo",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const { setAuth } = accountInfoSlice.actions;
export default accountInfoSlice;
export type { userInfo, stateUser };
