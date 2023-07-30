import { createSlice, createEntityAdapter, EntityState} from '@reduxjs/toolkit';



export interface Cracker {
  id: number;
  props: string;
  cost: number;
  weight: number;
}

const itemsAdapter = createEntityAdapter<Cracker>();

const initialState: EntityState<Cracker> = itemsAdapter.getInitialState();

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: itemsAdapter.addOne,
    removeItem: itemsAdapter.removeOne,
  },
});

export const { addItem, removeItem} = itemsSlice.actions;

export default itemsSlice.reducer;

// Helper functions to calculate cost and weight based on sliders percentages
function calculateCost(sliders: { [key: string]: number }): number {
  return Object.values(sliders).reduce((sum, percentage) => sum + (percentage / 100) * 100, 0);
}

function calculateWeight(sliders: { [key: string]: number }): number {
  return Object.values(sliders).reduce((sum, percentage) => sum + (percentage / 100) * 10, 0);
}
