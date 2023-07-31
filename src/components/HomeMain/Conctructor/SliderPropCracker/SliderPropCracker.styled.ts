import { Slider } from "@mui/material";
import styled from "styled-components";

export const WraooerSlider = styled.div`
  display: flex;
  aling-items: center;
`;

export const StyledSlider = styled(Slider)`
  margin: 20px;
  && {
    .MuiSlider-thumb {
      background-color: white;
      border: 2px solid;
    }
  }
`;

export const SliderValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-family: Rubik;
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;
  color: #4d4d4d;
`;
