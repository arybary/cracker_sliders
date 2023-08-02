import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackState } from "../../type";

const initialState: PackState = {
  cost: 0,
  weight: 0,
};

const packSlice = createSlice({
  name: "pack",
  initialState,
  reducers: {
    setSelectedPack: (state, action: PayloadAction<PackState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSelectedPack } = packSlice.actions;
export default packSlice.reducer;
