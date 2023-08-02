import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  color: white;
  font-family: Rubik;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 1px;
  text-align: left;
  background-color: #ff4200;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  gap: 10px;

  &:hover {
    width: 230px;
    border-radius: 90px;
  }
  &:hover::before {
    content: "ADD TO CART";
  }
`;

export const Icon = styled.span`
  font-size: 24px;
  color: white;
`;
