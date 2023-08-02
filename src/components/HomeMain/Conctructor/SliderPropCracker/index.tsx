import React from "react";
import { useActions } from "../../../../store/useActions";
import { CrackerPropsForSlider } from "../../../../type";
import {
  SliderValue,
  StyledSlider,
  WraooerSlider,
} from "./SliderPropCracker.styled";

const SliderPropCracker: React.FC<CrackerPropsForSlider> = ({
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
      <img src={`cracker_property_color_${id}.svg`} alt={name} />
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
