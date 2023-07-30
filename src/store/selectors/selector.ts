import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const crackerPropsSelector = (state: RootState) => state.crackerProps;

export const crackerPropsValue1Selector = createSelector(
  crackerPropsSelector,
  ({ crackerPropsValue1 }) => crackerPropsValue1
);
export const crackerPropsValue2Selector = createSelector(
  crackerPropsSelector,
  ({ crackerPropsValue2 }) => crackerPropsValue2
);
export const crackerPropsValue3Selector = createSelector(
  crackerPropsSelector,
  ({ crackerPropsValue3 }) => crackerPropsValue3
);
export const crackerPropsValue4Selector = createSelector(
  crackerPropsSelector,
  ({ crackerPropsValue4 }) => crackerPropsValue4
);