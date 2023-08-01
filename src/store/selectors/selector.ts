import { createSelector } from "@reduxjs/toolkit";
import { crackersAdapter } from "../slice/crackers.slice";
import { RootState } from "../store";

export const crackerPropsSelector = (state: RootState) => state.crackerProps;
export const packSelector = (state: RootState) => state.pack.selectedPack;

export const { selectAll: selectAllCrackers } = crackersAdapter.getSelectors(
  (state: RootState) => state.crackers
);

export const getTotalCostCrackers = createSelector(
  selectAllCrackers,
  (crackers) => crackers.reduce((value, cracker) => cracker.cost + value, 0)
);
