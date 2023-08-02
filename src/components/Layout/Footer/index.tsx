import React from "react";
import {
  StyledFooter,
  StyledLink,
  StyledText,
  StyledTitle,
} from "./Footer.styled";
import {
  Share,
  Pinterest,
  Facebook,
  Instagram,
  Phone,
  LocationOn,
} from "@mui/icons-material";

const Footer: React.FC = () => (
  <StyledFooter>
    <div>
      <StyledTitle>
        <Phone />
        <span>PHONE</span>
      </StyledTitle>
      <StyledText>
        <StyledLink href="tel:+489873456789">+48 (987) 345 - 6789</StyledLink>
      </StyledText>
    </div>
    <div>
      <StyledTitle>
        <LocationOn />
        ADRESS
      </StyledTitle>
      <StyledText>
        Cracker Inc. <br />
        10 Cloverfield Lane <br />
        Berlin IL 10928, Germany
      </StyledText>
    </div>
    <div>
      <StyledTitle>
        <Share />
        SHARE
      </StyledTitle>
      <StyledText>
        <StyledTitle>
          <Pinterest />
          <StyledLink target="_blank" href="/">
            pinterest.com
          </StyledLink>
        </StyledTitle>
        <StyledTitle>
          <Facebook />
          <StyledLink target="_blank" href="/">
            facebook.com
          </StyledLink>
        </StyledTitle>
        <StyledTitle>
          <Instagram />
          <StyledLink target="_blank" href="/">
            instagram.com
          </StyledLink>
        </StyledTitle>
      </StyledText>
    </div>
  </StyledFooter>
);

export default Footer;
