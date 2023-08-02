import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PackOptions, PackState } from "../../type";

const initialState: PackState = {
  selectedPack: null,
};

const packSlice = createSlice({
  name: "pack",
  initialState,
  reducers: {
    setSelectedPack: (state, action: PayloadAction<PackOptions | null>) => {
      state.selectedPack = action.payload;
    },
  },
});

export const { setSelectedPack } = packSlice.actions;
export default packSlice.reducer;
