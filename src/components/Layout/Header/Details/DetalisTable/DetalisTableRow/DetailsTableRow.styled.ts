import styled from "styled-components";

export const TableCell = styled.td`
  width: 56px;
  padding: 10px;
  align-items: center;
  font-family: Rubik;
  font-size: 16px;
  color: #4d4d4d;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props) => props.color || "#000"};
`;
