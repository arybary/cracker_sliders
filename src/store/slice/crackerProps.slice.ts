import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CrackerPropsState {
  crackerPropsValue1: number;
  crackerPropsValue2: number;
  crackerPropsValue3: number;
  crackerPropsValue4: number;
}

const initialState: CrackerPropsState = {
  crackerPropsValue1: 25,
  crackerPropsValue2: 25,
  crackerPropsValue3: 25,
  crackerPropsValue4: 25,
};

const crackerPropsSlice = createSlice({
  name: "crackerProps",
  initialState,
  reducers: {
    setCrackerPropsValue: (
      state,
      action: PayloadAction<{
        crackerPropsName: keyof CrackerPropsState;
        value: number;
      }>
    ) => {
      const { crackerPropsName, value } = action.payload;
      state[crackerPropsName] = value;
      state.crackerPropsValue4 =
        100 -
        (state.crackerPropsValue1 +
          state.crackerPropsValue2 +
          state.crackerPropsValue3);
    },
  },
});

export const { setCrackerPropsValue } = crackerPropsSlice.actions;

export default crackerPropsSlice.reducer;
