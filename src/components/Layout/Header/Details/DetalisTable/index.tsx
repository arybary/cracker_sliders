import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableContainer } from "./DetailsTable.styled";

const DetailsTable: React.FC = () => {
  // Можете замінити ці дані на дані з вашого джерела даних
  const data = [
    ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1"],
    ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"],
    ["A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3"],
    // Додайте більше рядків даних за потреби
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              {" "}
              <img src="cracker_property_1.svg" alt="Property_1" />
            </TableCell>
            <TableCell>
              {" "}
              <img src="cracker_property_2.svg" alt="Property_2" />
            </TableCell>
            <TableCell>
              {" "}
              <img src="cracker_property_3.svg" alt="Property_3" />
            </TableCell>
            <TableCell>
              <img src="cracker_property_4.svg" alt="Property_4" />
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
