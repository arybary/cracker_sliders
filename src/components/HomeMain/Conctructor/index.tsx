import React, { useState } from "react";
import {
  ConstructorContainer,
  ConstructorSubTitle,
  ConstructorTitle,
} from "./Constructor.styled";
import SliderPropCracker from "./SliderPropCracker";

const Constructor: React.FC = () => {
  const [slider1Value, setSlider1Value] = useState<number>(0);
  const [slider2Value, setSlider2Value] = useState<number>(0);
  const [slider3Value, setSlider3Value] = useState<number>(0);
  const [slider4Value, setSlider4Value] = useState<number>(0);
  const CrackerProp = [
    { id: 1, value: slider1Value, color: "#00A651" },
    { id: 2, value: slider2Value, color: "#49743F" },
    { id: 3, value: slider3Value, color: "#ABA000" },
    { id: 4, value: slider4Value, color: "#939393" },
  ];
  return (
    <ConstructorContainer>
      <ConstructorTitle>CRACKER CONSTRUCTOR</ConstructorTitle>
      <ConstructorSubTitle>Current Value: 143€</ConstructorSubTitle>
      {CrackerProp.map((prop) => (
        <SliderPropCracker key={prop.id} {...prop} />
      ))}
    </ConstructorContainer>
  );
};

export default Constructor;
