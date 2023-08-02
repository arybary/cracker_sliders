import { TableCell } from "./DetailsTableRow.styled";
import { Cracker } from "../../../../../../type";
import { useActions } from "../../../../../../store/useActions";

const DetailsTableRow: React.FC<Cracker> = ({ id, props, option}) => {
  const { removeCracker } = useActions();
  const {
    crackerPropsValue1,
    crackerPropsValue2,
    crackerPropsValue3,
    crackerPropsValue4,
  } = props;
  const{cost,weight}=option;

  return (
    <tr>
      <TableCell>
        <img src={"cracker_black.svg"} alt="cracker" />
      </TableCell>
      <TableCell color={"#FF4200"}>{crackerPropsValue1}%</TableCell>
      <TableCell color={"#FF4200"}>{crackerPropsValue2}%</TableCell>
      <TableCell color={"#FF4200"}>{crackerPropsValue3}%</TableCell>
      <TableCell color={"#FF4200"}>{crackerPropsValue4}%</TableCell>
      <TableCell>{weight}kg</TableCell>
      <TableCell>
        {cost.toLocaleString("en-US", {
          style: "currency",
          currency: "EUR",
        })}
      </TableCell>
      <TableCell
        style={{ cursor: "pointer" }}
        onClick={() => removeCracker(id)}
      >
        x
      </TableCell>
    </tr>
  );
};

export default DetailsTableRow;
