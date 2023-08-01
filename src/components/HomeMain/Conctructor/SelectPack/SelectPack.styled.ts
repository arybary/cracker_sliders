import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  gap:20px;
`;

export const StyledSelect = styled.select`
  width: 249px;
  height: 56px;
  padding: 16px 32px 16px 32px;
  border-radius: 90px;
  border: 2px solid #ff4200;
  gap: 8px;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  color: #ff4200;
  text-transform: uppercase;
  & option {
    outline: none;
    width: 225px;
    height: 100px;
    border-bottom: 2px solid #ff4200;
  }
`;

export const StyledOption = styled.option`
display:flex;
align-items: center;
outline: none;
  width: 225px;
  height: 100px;
`;
