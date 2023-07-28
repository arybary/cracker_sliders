import React from "react";
import {
  HeroContainer,
  HeroText,
  HeroTextContainer,
  HeroTitle,
  HeroTitleContainer,
  StyledButton,
  WrapperButton,
} from "./Hero.styled";

const Hero: React.FC = () => (
  <HeroContainer>
    <HeroTextContainer>
      <HeroText>
        Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
      </HeroText>
    </HeroTextContainer>
    <HeroTitleContainer>
      <HeroTitle>mostly tastes with freshes</HeroTitle>
      <WrapperButton>
        <StyledButton>TESTE IT</StyledButton>
      </WrapperButton>
    </HeroTitleContainer>
  </HeroContainer>
);

export default Hero;
