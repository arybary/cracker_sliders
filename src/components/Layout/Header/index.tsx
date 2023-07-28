import { Badge } from "@mui/material";
import React from "react";
import { Header, HeaderInfoPanel} from "./Header.styled";
import Details from "./Details";
import Logo from "../../Logo";

const HeaderBar: React.FC = () => (
  <Header>
   <Logo/>
    <HeaderInfoPanel>
      <Badge badgeContent={3} color="error">
        <img src="cracker.svg" alt="Info" />
      </Badge>
      <div>TOTAL: 143€</div>
      <Details />
    </HeaderInfoPanel>
  </Header>
);

export default HeaderBar;
