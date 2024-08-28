import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import Profile from "./Profile";
import MediaAndLinks from "./MediaAndLinks";
import StarredMessages from "./StarredMessages";

import { useSelector } from "react-redux";

import { X, ArrowLeft } from "phosphor-react";

import { useDispatch } from "react-redux";
import { ToggleSidebar, UpdateSidebar } from "../../redux/slices/app";

const ContactInformation = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Box
      // width={"320px"}
      width={"400px"}
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.paper,
        boxShadow: theme.shadows[4],
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        height={60}
        p={2}
        sx={{ boxShadow: theme.shadows[4] }}
      >
        {sidebar.type === "CONTACT" ? (
          <>
            <Typography variant="h6">Contact info</Typography>
            <IconButton
              sx={{
                fontSize: "20px",
                fontWeight: 600,
              }}
              onClick={() => {
                dispatch(ToggleSidebar());
              }}
            >
              <X weight="fill"/>
            </IconButton>
          </>
        ) : (
          <IconButton
            onClick={() => {
              dispatch(UpdateSidebar("CONTACT"));
            }}
          >
            <ArrowLeft size={21} />
          </IconButton>
        )}
      </Stack>
      <Stack
        sx={{
          height: "calc(100vh - 60px)",
          overflowY: "scroll",
        }}
      >
        {sidebar.type === "CONTACT" ? (
          <Profile />
        ) : sidebar.type === "MEDIA" ? (
          <MediaAndLinks />
        ) : sidebar.type === "STARRED" ? (
          <StarredMessages />
        ) : null}
      </Stack>
    </Box>
  );
};

export default ContactInformation;
