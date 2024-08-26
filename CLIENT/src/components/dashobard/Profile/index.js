import React from "react";
import { navigate, useNavigate } from "react-router-dom";

import { Box, IconButton, Stack, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "./ProfileForm";

const Chats = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        width: "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        overflowY: "scroll",
      }}
      height={"100%"}
      maxHeight={"100vh"}
    >
      <Stack direction={"row"} spacing={2} alignItems={"center"} p={2}>
        <IconButton onClick={() => navigate(-1)}>
          <CaretLeft size={20} weight="fill" />
        </IconButton>
        <Typography variant={"h4"}>Profile</Typography>
      </Stack>
      <ProfileForm />
    </Box>
  );
};

export default Chats;
