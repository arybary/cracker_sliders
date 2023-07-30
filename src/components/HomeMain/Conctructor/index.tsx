import React from "react";
import { crackerPropsValue1Selector, crackerPropsValue2Selector, crackerPropsValue3Selector, crackerPropsValue4Selector } from "../../../store/selectors/selector";

import { CrackerPropsState } from "../../../store/slice/crackerProps.slice";

import { useTypedSelector } from "../../../store/useTypedSelector";
import {
  ConstructorContainer,
  ConstructorSubTitle,
  ConstructorTitle,
} from "./Constructor.styled";
import SliderPropCracker from "./SliderPropCracker";

interface CrackerProps {
  id: number;
  name: keyof CrackerPropsState;
  value: number;
  color: string;
  disabled: boolean;
  maxValue:number
}

const Constructor: React.FC = () => {
const crackerPropsValue1 = useTypedSelector(crackerPropsValue1Selector)
const crackerPropsValue2 = useTypedSelector(crackerPropsValue2Selector)
const crackerPropsValue3 = useTypedSelector(crackerPropsValue3Selector)
const crackerPropsValue4 = useTypedSelector(crackerPropsValue4Selector)


  const crackerProp: CrackerProps[] = [
    {
      id: 1,
      name: "crackerPropsValue1",
      value: crackerPropsValue1,
      color: "#00A651",
      disabled: false,
      maxValue: 99 - (crackerPropsValue2 + crackerPropsValue3),
    },
    {
      id: 2,
      name: "crackerPropsValue2",
      value: crackerPropsValue2,
      color: "#49743F",
      disabled: false,
      maxValue: 99 - (crackerPropsValue1 + crackerPropsValue3),
    },
    {
      id: 3,
      name: "crackerPropsValue3",
      value: crackerPropsValue3,
      color: "#ABA000",
      disabled: false,
      maxValue: 99 - (crackerPropsValue1 + crackerPropsValue2),
    },
    {
      id: 4,
      name: "crackerPropsValue4",
      value: crackerPropsValue4,
      color: "#939393",
      disabled: true,
      maxValue: 97,
    },
  ];
  return (
    <ConstructorContainer>
      <ConstructorTitle>CRACKER CONSTRUCTOR</ConstructorTitle>
      <ConstructorSubTitle>Current Value: 143€</ConstructorSubTitle>
      {crackerProp.map((prop) => (
        <SliderPropCracker key={prop.id} {...prop} />
      ))}
    </ConstructorContainer>
  );
};

export default Constructor;
