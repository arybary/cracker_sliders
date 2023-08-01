import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { setCrackerPropsValue } from "./slice/crackerProps.slice";
import { addCracker, removeCracker } from "./slice/crackers.slice";
import { setSelectedPack } from "./slice/pack.slice";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    { setCrackerPropsValue, setSelectedPack, addCracker, removeCracker },
    dispatch
  );
};
