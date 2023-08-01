import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  background-image: url("footer-cracker.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 788px;
  display: flex;
  flex-wrap: wrap;
  height: 788px;
  align-items: start;
  justify-content: space-evenly;
  padding: 110px 0;
  color: #fff;
  gap: 10px;
`;

export const StyledTitle = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0px;
`;

export const StyledText = styled.div`
  padding: 0 30px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
