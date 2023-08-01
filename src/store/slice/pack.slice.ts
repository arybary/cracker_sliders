// packSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PackOptions = 'small' | 'medium' | 'large';

export interface PackState {
  selectedPack: PackOptions | null;
}

const initialState: PackState = {
  selectedPack: null,
};

const packSlice = createSlice({
  name: 'pack',
  initialState,
  reducers: {
    setSelectedPack: (state, action: PayloadAction<PackOptions | null>) => {
      state.selectedPack = action.payload;
    },
  },
});

export const { setSelectedPack } = packSlice.actions;
export default packSlice.reducer;
