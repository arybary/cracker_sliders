import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.nav`
  display: flex;
  background: #33333380;
  align-items: center;
  justify-content: space-evenly;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
`;

export const NavigationLink = styled(Link)<{ active: "true" | "false" }>`
  padding: 32px 0px 32px 0px;
  margin: 0;
  color: #fff;
  text-decoration: none;
  border-bottom: ${({ active }) =>
    active === "true" ? "2px solid #FF4200" : "none"};
`;
