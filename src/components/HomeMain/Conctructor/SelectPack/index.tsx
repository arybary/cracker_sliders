import React from "react";
import { useActions } from "../../../../store/useActions";
import {
  SelectContainer,
  StyledOption,
  StyledSelect,
} from "./SelectPack.styled";
import { packs } from "../../../../constant";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const SelectPack: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { setSelectedPack } = useActions();

  return (
    <SelectContainer>
      <img src="pack.svg" alt="pack" />
      <div>
        <StyledSelect onClick={() => setOpen(!open)}>
          <div>choose your pack</div>
          {open ? <ExpandLess /> : <ExpandMore />}
        </StyledSelect>
        {open &&
          packs.map(({ id, name, cost, weight }) => (
            <StyledOption
              key={id}
              onClick={() => {
                setSelectedPack({ cost, weight });
                setOpen(false);
              }}
            >
              {name}
            </StyledOption>
          ))}
      </div>
    </SelectContainer>
  );
};

export default SelectPack;
