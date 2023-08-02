import styled from "styled-components";

export const SelectContainer = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;
`;

export const StyledSelect = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 249px;
  height: 56px;
  padding: 12px;
  border-radius: 90px;
  border: 2px solid #ff4200;
  gap: 8px;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: #ff4200;
  text-transform: uppercase;
  cursor:pointer;
`;

export const StyledOption = styled.li`
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: #ff4200;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none; 
  width: 249px;
  height: 42px;
  border-bottom: 2px solid #ff4200;
  text-transform: uppercase;
  cursor:pointer;
`;
