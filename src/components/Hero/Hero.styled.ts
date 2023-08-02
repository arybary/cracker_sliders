import { Button } from "@mui/base";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 734px;
  padding-top: 88px;
  font-family: Rubik;
  display: flex;
  flex-wrap: wrap;
  color: #fff;
`;

export const HeroTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 360px;
  padding: 32px 80px 0px 80px;
  width: 45%;
  background: #8bb37dcc;
  margin-right: -40px;
`;

export const HeroText = styled.span`
  display: flex;
  align-items: self-end;
  padding-right: 24px;
  width: 400px;
  height: 268px;
  text-align: end;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  border-right: 2px solid #ffffff;
  overflow: hidden;
`;

export const HeroTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 360px;
  font-size: 64px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 1px;
  text-align: left;
  text-transform: uppercase;
`;

export const HeroTitle = styled.div`
  display: flex;
  padding-top: 14px;
  max-width: 540px;
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledButton = styled(Button)`
  width: 160px;
  height: 56px;
  padding: 14px 30px 14px 30px;
  border-radius: 90px;
  background: #ff4200;
  color: #ffffff;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
`;
