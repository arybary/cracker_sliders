import React from "react";
import { CrackerPropsState } from "../../../../store/slice/crackerProps.slice";
import { useActions } from "../../../../store/useActions";
import {
  SliderValue,
  StyledSlider,
  WraooerSlider,
} from "./SliderPropCracker.styled";

interface CrackerSliderProps {
  id: number;
  name: keyof CrackerPropsState;
  value: number;
  color: string;
  disabled: boolean;
  maxValue: number;
}

const SliderPropCracker: React.FC<CrackerSliderProps> = ({
  id,
  name,
  value,
  maxValue,
  color,
}) => {
  const { setCrackerPropsValue } = useActions();
  const handleSliderChange = (event: any) => {
    console.log(event.target.value);
    let value = event.target.value;
    if (value > maxValue) {
      value = maxValue;
    }
    setCrackerPropsValue({ crackerPropsName: name, value: value as number });
  };
  return (
    <WraooerSlider>
      <img src={`cracker_property_color_${id}.svg`} />
      <StyledSlider
        value={value}
        min={1}
        max={100}
        sx={{ color: color }}
        onChange={handleSliderChange}
      />

      <SliderValue>{value}%</SliderValue>
    </WraooerSlider>
  );
};

export default SliderPropCracker;
