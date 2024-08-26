import React from "react";
import { styled } from "@mui/material/styles";
import {
  Switch,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

const ReportButton = styled(Button)({
  color: "#BFD641",
  borderColor: "#BFD641",
  "&:hover": {
    borderColor: "rgba(191, 214, 65, 0.5)",
    backgroundColor: "rgba(191, 214, 65, 0.1)",
  },
  "&:active": {
    borderColor: "rgba(191, 214, 65, 0.5)",
  },
});

const DialogBlock = ({ open, handleClose, DialogType }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const data = DialogType === "REPORT" ? {
    title: "Report",
    content: "Are you sure you want to report this user?",
    action: "Report",
  } : {
    title: "Delete",
    content: "Are you sure you want to delete this user?",
    action: "Delete",
  };


  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {data.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            {data.action}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export { ReportButton, DialogBlock };
