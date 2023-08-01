import { Badge } from "@mui/material";
import React from "react";
import { Header, HeaderInfoPanel } from "./Header.styled";
import Details from "./Details";
import Logo from "../../Logo";
import { useTypedSelector } from "../../../store/useTypedSelector";
import { getTotalCostCrackers, selectAllCrackers } from "../../../store/selectors/selector";

const HeaderBar: React.FC = () => {
  const crackers=useTypedSelector(selectAllCrackers)
  const total=useTypedSelector(getTotalCostCrackers)
  return (
    <Header>
      <Logo />
      <HeaderInfoPanel>
        <Badge badgeContent={crackers.length} color="error">
          <img src="cracker.svg" alt="Info" />
        </Badge>
        <div>TOTAL: {total}€</div>
        <Details />
      </HeaderInfoPanel>
    </Header>
  );
};

export default HeaderBar;
