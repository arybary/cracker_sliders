import React, { ChangeEventHandler } from "react";
import { CrackerPropsState } from "../../../../store/slice/crackerProps.slice";
import { useActions } from "../../../../store/useActions";
import {
  SliderValue,
  StyledImg,
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
  disabled,
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
      <StyledImg src={`cracker_property_${id}.svg`} colorImg={color} />
      <StyledSlider
        defaultValue={value}
        min={1}
        max={100}
        colorSl={color}
        onChange={handleSliderChange}
      />

      <SliderValue>{value}%</SliderValue>
    </WraooerSlider>
  );
};

export default SliderPropCracker;
