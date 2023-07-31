import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { setCrackerPropsValue } from "./slice/crackerProps.slice";
import { setSelectedPack } from "./slice/pack.slice";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setCrackerPropsValue,setSelectedPack }, dispatch);
};

