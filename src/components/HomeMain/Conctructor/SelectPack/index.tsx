import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { packSelector } from "../../../../store/selectors/selector";
import { PackOption, PackState } from "../../../../store/slice/pack.slice";
import { useActions } from "../../../../store/useActions";
import { useTypedSelector } from "../../../../store/useTypedSelector";

const SelectPack: React.FC = () => {
  const { setSelectedPack } = useActions();
  const selectedPack = useTypedSelector(packSelector);

  const handlePackChange = (event: SelectChangeEvent<PackState>) => {
    setSelectedPack(event.target.value as PackOption );
  };

  return (
    <FormControl>
      <InputLabel id="pack-select-label" style={{ color: '#FF4200' }}>
        Текст
      </InputLabel>
      <Select
        labelId="pack-select-label"
        id="pack-select"
        value={selectedPack}
        onChange={handlePackChange}
        style={{ color: '#FF4200', borderBottom: '2px solid #FF4200' }}
      >
        <MenuItem value="small pack" style={{ color: '#FF4200' }}>
          Small Pack
        </MenuItem>
        <MenuItem value="medium pack" style={{ color: '#FF4200' }}>
          Medium Pack
        </MenuItem>
        <MenuItem value="large pack" style={{ color: '#FF4200' }}>
          Large Pack
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectPack;
