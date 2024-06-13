import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import CreateGroupForm from "./CreateGroupForm";

const DialogBlock = ({ open, handleClose }) => {
  const data = {
    title: "Create new group",
    action: "Create",
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{data.title}</DialogTitle>
        <DialogContent
          sx={{
            mt: "10px",
            width: "400px",
            padding: "30px",
          }}
        >
          <CreateGroupForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export { DialogBlock };
