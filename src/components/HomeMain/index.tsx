import React from "react";
import About from "./About";
import Constructor from "./Conctructor";
import { HomeContainer } from "./HomeMain.styled";

const HomeMain: React.FC = () => (
  <HomeContainer>
    <About />
    <Constructor />
  </HomeContainer>
);

export default HomeMain;
