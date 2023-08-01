import React from "react";
import { crackerPropsSelector } from "../../../store/selectors/selector";
import { v4 as uuidv4 } from "uuid";
import { CrackerPropsState } from "../../../store/slice/crackerProps.slice";
import { useActions } from "../../../store/useActions";

import { useTypedSelector } from "../../../store/useTypedSelector";
import AddButton from "./AddButton";
import {
  ButtonsContainer,
  ConstructorContainer,
  ConstructorSubTitle,
  ConstructorTitle,
} from "./Constructor.styled";
import SelectPack from "./SelectPack";
import SliderPropCracker from "./SliderPropCracker";

interface CrackerProps {
  id: number;
  name: keyof CrackerPropsState;
  value: number;
  color: string;
  disabled: boolean;
  maxValue: number;
}

const Constructor: React.FC = () => {
  const crackerProps = useTypedSelector(crackerPropsSelector);
  const {
    crackerPropsValue1,
    crackerPropsValue2,
    crackerPropsValue3,
    crackerPropsValue4,
  } = crackerProps;

  const { addCracker } = useActions();
  const addItem = () =>
    addCracker({ id: uuidv4(), props: crackerProps, cost: 6, weight: 5 });

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
      <ButtonsContainer>
        <SelectPack />
        <AddButton onClickAdd={addItem} />
      </ButtonsContainer>
    </ConstructorContainer>
  );
};

export default Constructor;
