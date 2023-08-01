import { getTotalCostCrackers, selectAllCrackers } from "../../../../../store/selectors/selector";
import { useTypedSelector } from "../../../../../store/useTypedSelector";
import { useActions } from "../../../../../store/useActions";
import {
  StyledButton,
  TableCell,
  TableContainer,
  TableFooter,
  TableHeaderCell,
  TableRow,
} from "./DetailsTable.styled";


const DetailsTable: React.FC = () => {
  const crackers = useTypedSelector(selectAllCrackers);
  const total=useTypedSelector(getTotalCostCrackers)
  const { removeCracker } = useActions();

  return (
    <div>
    <TableContainer>
      <thead>
        <TableRow>
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
        </TableRow>
      </thead>
      <tbody>
        {crackers.map(({ id, props, cost, weight }) => {
          const {
            crackerPropsValue1,
            crackerPropsValue2,
            crackerPropsValue3,
            crackerPropsValue4,
          } = props;
          return (
            <TableRow key={id}>
              <TableCell>
                <img src={"cracker_black.svg"} alt="cracker" />
              </TableCell>
              <TableCell color={"#FF4200"}>{crackerPropsValue1}%</TableCell>
              <TableCell color={"#FF4200"}>{crackerPropsValue2}%</TableCell>
              <TableCell color={"#FF4200"}>{crackerPropsValue3}%</TableCell>
              <TableCell color={"#FF4200"}>{crackerPropsValue4}%</TableCell>
              <TableCell>{weight} kg</TableCell>
              <TableCell>
                {cost.toLocaleString("en-US", {
                  style: "currency",
                  currency: "EUR",
                })}
              </TableCell>
              <TableCell style={{cursor:"pointer"}} onClick={() => removeCracker(id)}>x</TableCell>
            </TableRow>
          );
        })}
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
