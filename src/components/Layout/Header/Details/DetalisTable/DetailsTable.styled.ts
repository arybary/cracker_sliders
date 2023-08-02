import styled from "styled-components";

export const TableContainer = styled.table`
  border-collapse: collapse;
  border-radius: 24px;
`;

export const TableHeaderCell = styled.th`
  width: 56px;
`;

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

export const TableFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  gap: 20px;
  padding: 20px;
`;
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  border: none;
  border-radius: 90px;
  gap: 10px;
  color: #fff;
  background: #ff4200;
  font-family: Rubik;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 1px;
  text-align: left;
  margin-left: 0;
`;
