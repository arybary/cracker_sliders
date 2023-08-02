import { Dialog } from "@mui/material";
import styled from "styled-components";

export const DetailsButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DialogContainer = styled(Dialog)`
  top: 500;
  .MuiDialog-paper {
    margin: 64px 24px;
  }
`;

export const CloseButtonContainer = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(90deg);
  }
`;
