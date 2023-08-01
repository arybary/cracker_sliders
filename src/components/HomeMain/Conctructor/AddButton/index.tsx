import React from "react";
import { ButtonContainer, Icon } from "./AddButton.styled";

interface AddButtonProps {
  onClickAdd: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ onClickAdd }) => (
  <ButtonContainer onClick={onClickAdd}>
    <Icon>+</Icon>
  </ButtonContainer>
);

export default AddButton;
