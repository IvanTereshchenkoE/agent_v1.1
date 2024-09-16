import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalsState {
  modalAddNore: boolean;
  modalTransferChose: boolean;
  modalTransferMoney: boolean;
  modalAddUser: boolean;
  modalAddAgent: boolean;
  modalAddPlayer: boolean;
  modalSettings: boolean;
  modalResetPassword: boolean;
  modalSavedFilters: boolean;
  modalFiltres: boolean;
}

const initialState: ModalsState = {
  modalAddNore: false,
  modalTransferChose: false,
  modalTransferMoney: false,
  modalAddUser: false,
  modalAddAgent: false,
  modalAddPlayer: false,
  modalSettings: false,
  modalResetPassword: false,
  modalSavedFilters: false,
  modalFiltres: false,
};

const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setModalAddNote: (state, action: PayloadAction<boolean>) => {
      state.modalAddNore = action.payload;
    },
    setModalTransferChose: (state, action: PayloadAction<boolean>) => {
      state.modalTransferChose = action.payload;
    },
    setModalTransferMoney: (state, action: PayloadAction<boolean>) => {
      state.modalTransferMoney = action.payload;
    },
    setModalAddUser: (state, action: PayloadAction<boolean>) => {
      state.modalAddUser = action.payload;
    },
    setModalAddAgent: (state, action: PayloadAction<boolean>) => {
      state.modalAddAgent = action.payload;
    },
    setModalAddPlayer: (state, action: PayloadAction<boolean>) => {
      state.modalAddPlayer = action.payload;
    },
    setModalSettings: (state, action: PayloadAction<boolean>) => {
      state.modalSettings = action.payload;
    },
    setModalResetPassword: (state, action: PayloadAction<boolean>) => {
      state.modalResetPassword = action.payload;
    },
    setModalSavedFilters: (state, action: PayloadAction<boolean>) => {
      state.modalSavedFilters = action.payload;
    },
    setModalFilters: (state, action: PayloadAction<boolean>) => {
      state.modalFiltres = action.payload;
    },
  },
});

export const {
  setModalAddNote,
  setModalTransferChose,
  setModalTransferMoney,
  setModalAddUser,
  setModalAddAgent,
  setModalAddPlayer,
  setModalSettings,
  setModalResetPassword,
  setModalSavedFilters,
  setModalFilters,
} = modalsSlice.actions;
export default modalsSlice;
