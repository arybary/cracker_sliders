// src/features/packSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PackOption = 'small pack' | 'medium pack' | 'large pack';

export interface PackState {
  selectedPack: PackOption;
}

const initialState: PackState = {
  selectedPack: 'small pack',
};

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    setSelectedPack: (state, action: PayloadAction<PackOption>) => {
      state.selectedPack = action.payload;
    },
  },
});

export const { setSelectedPack } = packSlice.actions;
export default packSlice.reducer;
