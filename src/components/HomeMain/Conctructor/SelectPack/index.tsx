import React from "react";
import { useActions } from "../../../../store/useActions";
import { packNameSelector } from "../../../../store/selectors/selector";
import { useTypedSelector } from "../../../../store/useTypedSelector";
import { SelectContainer, StyledOption, StyledSelect } from "./SelectPack.styled";
import { PackOptions } from "../../../../type";

const SelectPack: React.FC = () => {
  const { setSelectedPack } = useActions();
  const selectedPack = useTypedSelector(packNameSelector);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPack(event.target.value as PackOptions | null);
  };

  return (<SelectContainer>
    <img src="pack.svg" alt="pack" />
    <StyledSelect value={selectedPack || ""} onChange={handleChange}>
      <StyledOption value="" disabled>
        Choose your pack
      </StyledOption>
      <StyledOption value="small">Small Pack</StyledOption>
      <StyledOption value="medium">Medium Pack</StyledOption>
      <StyledOption value="large">Large Pack</StyledOption>
    </StyledSelect>
    </SelectContainer>
  );
};

export default SelectPack;
