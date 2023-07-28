import React from "react";
import {
  SliderValue,
  StyledImg,
  StyledSlider,
  WraooerSlider,
} from "./SliderPropCracker.styled";

interface CrackerSliderProps {
  id: number;
  value: number;
  color: string;
  onChange?: (event: Event, value: number | number[]) => void;
}

const SliderPropCracker: React.FC<CrackerSliderProps> = ({
  id,
  value,
  color,
  onChange,
}) => (
  <WraooerSlider>
    <StyledImg src={`cracker_property_${id}.svg`}  colorImg={color} />
    <StyledSlider defaultValue={value} max={100} colorSl={color} />
    <SliderValue>{value}</SliderValue>
  </WraooerSlider>
);

export default SliderPropCracker;
