import {
  createSlice,
  createEntityAdapter,
  EntityState,
} from "@reduxjs/toolkit";
import { initialCrackers } from "../../constant";
import { Cracker } from "../../type";

export const crackersAdapter = createEntityAdapter<Cracker>();

const initialState: EntityState<Cracker> = crackersAdapter.getInitialState({
  entities: initialCrackers,
  ids: Object.keys(initialCrackers),
});

const crackersSlice = createSlice({
  name: "crackers",
  initialState,
  reducers: {
    addCracker: crackersAdapter.addOne,
    removeCracker: crackersAdapter.removeOne,
  },
});

export const { addCracker, removeCracker } = crackersSlice.actions;

export default crackersSlice.reducer;
