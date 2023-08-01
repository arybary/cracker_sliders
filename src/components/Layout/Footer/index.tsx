import React from "react";
import { StyledFooter, StyledLink } from "./Footer.styled";
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
      <div>
        <Phone />
        PHONE
      </div>
      <div>
        <StyledLink href="tel:+489873456789">+48 (987) 345 - 6789</StyledLink>
      </div>
    </div>
    <div>
      <LocationOn />
      ADRESS
      <div>
        <p>
          Cracker Inc. <br />
          10 Cloverfield Lane <br />
          Berlin IL 10928, Germany
        </p>
      </div>
    </div>
    <div>
      <Share />
      share
      <div>
        <Pinterest />
        <StyledLink target="_blank" href="/">
          pinterest.com
        </StyledLink>
      </div>
      <div>
        <Facebook />
        <StyledLink target="_blank" href="/">
          facebook.com
        </StyledLink>
      </div>
      <div>
        <Instagram />
        <StyledLink target="_blank" href="/">
          instagram.com
        </StyledLink>
      </div>
    </div>
  </StyledFooter>
);

export default Footer;
