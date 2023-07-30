import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { setCrackerPropsValue } from "./slice/crackerProps.slice";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ setCrackerPropsValue }, dispatch);
};

