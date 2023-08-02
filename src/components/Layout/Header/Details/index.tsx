import React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  CloseButtonContainer,
  DetailsButton,
  DialogContainer,
} from "./Details.styled";
import { DialogContent, IconButton } from "@mui/material";
import DetailsTable from "./DetalisTable";
import CloseIcon from "@mui/icons-material/Close";

const Details: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DetailsButton onClick={handleClick}>
        <div>DETAILS</div>
        {open ? <ExpandLess /> : <ExpandMore />}
      </DetailsButton>
      <DialogContainer open={open} onClose={handleClose}>
        <CloseButtonContainer>
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </CloseButtonContainer>
        <DialogContent>
          <DetailsTable />
        </DialogContent>
      </DialogContainer>
    </>
  );
};

export default Details;
