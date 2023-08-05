import React from "react";
import {
  crackerPropsSelector,
  getTotalCostCrackers,
  packSelector,
} from "../../../store/selectors/selector";
import { v4 as uuidv4 } from "uuid";
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
import { CrackerPropsForSlider } from "../../../types";

const Constructor: React.FC = () => {
  const crackerProps = useTypedSelector(crackerPropsSelector);
  const pack = useTypedSelector(packSelector);
  const total = useTypedSelector(getTotalCostCrackers);
  const { addCracker } = useActions();

  const {
    crackerPropsValue1,
    crackerPropsValue2,
    crackerPropsValue3,
    crackerPropsValue4,
  } = crackerProps;

  const addItem = () =>
    addCracker({ id: uuidv4(), props: crackerProps, option:pack });

  const crackerProp: CrackerPropsForSlider[] = [
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
      <ConstructorSubTitle>Current Value: {total}€</ConstructorSubTitle>
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
