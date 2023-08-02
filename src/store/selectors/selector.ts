import { createSelector } from "@reduxjs/toolkit";
import { pack } from "../../constant";
import { crackersAdapter } from "../slice/crackers.slice";
import { RootState } from "../store";

export const crackerPropsSelector = (state: RootState) => state.crackerProps;

export const packNameSelector = (state: RootState) => state.pack.selectedPack;

export const { selectAll: selectAllCrackers } = crackersAdapter.getSelectors(
  (state: RootState) => state.crackers
);

export const getPackOptions = createSelector(packNameSelector, (packName) =>
  packName === null ? { cost: 0, weight: 0 } : pack[packName]
);

export const getTotalCostCrackers = createSelector(
  selectAllCrackers,
  (crackers) => crackers.reduce((value, cracker) => cracker.cost + value, 0)
);
