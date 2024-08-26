import React from "react";
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { ShortcutsList } from "../../../data";

const ShortcutDialog = ({ open, handleClose }) => {
  return (
    <React.Fragment>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ p: 4 }}
      >
        <DialogTitle>{"Keyboard Shortcuts"}</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          {/*  */}
          <Grid container spacing={3}>
            {ShortcutsList.map(({ key, title, combination }) => {
              return (
                <Grid item xs={6} key={key}>
                  <Stack
                    sx={{ width: "100%" }}
                    justifyContent="space-between"
                    key={key}
                    spacing={3}
                    direction={"row"}
                    alignItems="center"
                  >
                    <Typography variant="caption" sx={{ fontSize: 14 }}>
                      {title}
                    </Typography>
                    <Stack spacing={2} direction="row">
                      {combination.map((el, index) => {
                        return (
                          <Button
                            sx={{
                              color: "#212121",
                              border: "2px solid",
                            }}
                            disabled
                            variant="contained"
                            key={index}
                          >
                            {el}
                          </Button>
                        );
                      })}
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant={"contained"} onClick={handleClose}>
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ShortcutDialog;
