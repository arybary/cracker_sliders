import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-top: 80px;
`;

export const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 54px;
  font-family: Rubik;
  font-size: 48px;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 1px;
  text-align: left;
  color: #4d4d4d;
  margin-bottom: 20px;
`;

export const AboutContainerText = styled.div`
  display: flex;
  height: 372px;
  align-items: center;
  background: #e5d3cfcc;
  padding-left: 60px;
`;

export const AboutText = styled.span`
  display: flex;
  height: 252px;
  max-width: 65%;
  font-family: Rubik;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
`;

export const WrapperLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20px;
`;
