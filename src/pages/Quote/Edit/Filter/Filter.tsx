import * as React from "react";
import Button from "@mui/material/Button";
import MuiModal from "./Modal/MuiModal";

const Filter = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button
        variant="outlined"
        className="w-full cursor-pointer hover:bg-sky-300 duration-200"
        onClick={handleOpen}
      >
        Filter
      </Button>
      <MuiModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Filter;
