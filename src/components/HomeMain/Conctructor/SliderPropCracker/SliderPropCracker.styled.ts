import { Slider } from "@mui/material";
import styled from "styled-components";

interface StyledSliderProps {
  colorSl: string;
}

interface StyledImgProps {
  colorImg: string;
}

export const WraooerSlider = styled.div`
  display: flex;
  aling-items: center;
`;
export const StyledImg = styled.img<StyledImgProps>`
  display: block;
  -webkit-mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  background-color: ${({ colorImg }) => colorImg};
  margin: 0 10px;
`;
export const StyledSlider = styled(Slider)<StyledSliderProps>`
  margin: 20px;
  && {
    color: ${({ colorSl }) => colorSl};
    .MuiSlider-thumb {
      background-color: white;
      border: 2px solid ${({ colorSl }) => colorSl};
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
