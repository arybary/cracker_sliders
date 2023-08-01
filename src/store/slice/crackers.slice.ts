import { createSlice, createEntityAdapter, EntityState} from '@reduxjs/toolkit';
import { CrackerPropsState } from './crackerProps.slice';



export interface Cracker {
  id: string;
  props: CrackerPropsState;
  cost: number;
  weight: number;
}

export const crackersAdapter = createEntityAdapter<Cracker>();

const initialState: EntityState<Cracker> = crackersAdapter.getInitialState();

const crackersSlice = createSlice({
  name: 'crackers',
  initialState,
  reducers: {
    addCracker: crackersAdapter.addOne,
    removeCracker: crackersAdapter.removeOne,
  },
});

export const { addCracker, removeCracker} = crackersSlice.actions;

export default crackersSlice.reducer;

// Helper functions to calculate cost and weight based on sliders percentages
function calculateCost(sliders: { [key: string]: number }): number {
  return Object.values(sliders).reduce((sum, percentage) => sum + (percentage / 100) * 100, 0);
}

function calculateWeight(sliders: { [key: string]: number }): number {
  return Object.values(sliders).reduce((sum, percentage) => sum + (percentage / 100) * 10, 0);
}
