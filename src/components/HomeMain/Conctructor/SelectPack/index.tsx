import React from "react";
import { useActions } from "../../../../store/useActions";
import { packSelector } from "../../../../store/selectors/selector";
import { useTypedSelector } from "../../../../store/useTypedSelector";
import { PackOptions } from "../../../../store/slice/pack.slice";
import { SelectContainer, StyledSelect } from "./SelectPack.styled";

const SelectPack: React.FC = () => {
  const { setSelectedPack } = useActions();
  const selectedPack = useTypedSelector(packSelector);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPack(event.target.value as PackOptions | null);
  };

  return (<SelectContainer>
    <img src="pack.svg" alt="pack" />
    <StyledSelect value={selectedPack || ""} onChange={handleChange}>
      <option value="" disabled>
        Choose your pack
      </option>
      <option value="small pack">Small Pack</option>
      <option value="medium pack">Medium Pack</option>
      <option value="large pack">Large Pack</option>
    </StyledSelect>
    </SelectContainer>
  );
};

export default SelectPack;
