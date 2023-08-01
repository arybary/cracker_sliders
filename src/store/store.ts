import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, Middleware } from "redux";
import crackerPropsSlice from "./slice/crackerProps.slice";
import packSlice from "./slice/pack.slice";
import crackersSlice from "./slice/crackers.slice";

const rootReduser = combineReducers({
  crackerProps: crackerPropsSlice,
  pack: packSlice,
  crackers:crackersSlice
});

export type RootState = ReturnType<typeof rootReduser>;

const logger: Middleware<{}, RootState> = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});

export default store;
