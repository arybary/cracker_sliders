import React from "react";
import {
  getTotalCostCrackers,
  selectAllCrackers,
} from "../../../../../store/selectors/selector";
import { useTypedSelector } from "../../../../../store/useTypedSelector";
import {
  StyledButton,
  TableContainer,
  TableFooter,
  TableHeaderCell,
} from "./DetailsTable.styled";
import DetailsTableRow from "./DetalisTableRow";

const DetailsTable: React.FC = () => {
  const crackers = useTypedSelector(selectAllCrackers);
  const total = useTypedSelector(getTotalCostCrackers);

  return (
    <div>
      <TableContainer>
        <thead>
          <tr>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell>
              <img src="cracker_property_1.svg" alt="Property_1" />
            </TableHeaderCell>
            <TableHeaderCell>
              <img src="cracker_property_2.svg" alt="Property_2" />
            </TableHeaderCell>
            <TableHeaderCell>
              <img src="cracker_property_3.svg" alt="Property_3" />
            </TableHeaderCell>
            <TableHeaderCell>
              <img src="cracker_property_4.svg" alt="Property_4" />
            </TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </tr>
        </thead>
        <tbody>
          {crackers.map((cracker) => (
            <DetailsTableRow key={cracker.id} {...cracker} />
          ))}
        </tbody>
      </TableContainer>
      <TableFooter>
        <div>TOTAL: {total}€</div>
        <StyledButton>CHEKOUT</StyledButton>
      </TableFooter>
    </div>
  );
};

export default DetailsTable;
