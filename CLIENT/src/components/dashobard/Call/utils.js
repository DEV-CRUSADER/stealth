import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  useMediaQuery,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import { MagnifyingGlass, X } from "phosphor-react";
import { Search, SearchIconWrapper, StyledInputBase } from "../../Search";
import { CallComponent } from "./CallComponent";
import { ChatList } from "../../../data";

const DialogBlock = ({ open, handleClose }) => {
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Search
              sx={{
                background: alpha(theme.palette.primary.lighter, 0.8),
              }}
            >
              <SearchIconWrapper>
                <MagnifyingGlass color={theme.palette.primary.darker} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                sx={{
                  color: "black",
                }}
              />
            </Search>
            <IconButton
              onClick={handleClose}
              sx={{
                width: "40px",
                background: "#CCC",
              }}
            >
              <X size={18} />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent
          sx={{
            mt: "10px",
            width: "400px",
            overflowY: "scroll",
            padding: "30px",
          }}
        >
          <Stack spacing={1}>
            {ChatList.map((person, index) => (
              <CallComponent
                key={person.id}
                id={person.id}
                img={person.img}
                name={person.name}
                online={person.online}
              />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export { DialogBlock };
