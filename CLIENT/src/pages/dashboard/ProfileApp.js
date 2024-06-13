import React from "react";

import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Conversation from "../../components/Conversation";
import ContactInformaion from "../../components/Contact";

import { useSelector } from "react-redux";
import Profile from "../../components/dashobard/Profile";

const ProfileApp = () => {
  const theme = useTheme();
  
  const { sidebar } = useSelector((state) => state.app);

  return (
    <Stack direction={"row"}>
      <Profile />
      <Box
        sx={{
          position: "relative",
          width: sidebar.open ? "calc(100vw - 720px)" : "calc(100vw - 400px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#FFFFFF"
              : theme.palette.background.default,
          height: "100%",
        }}
      >
        <Conversation />
      </Box>
      {
        sidebar.open && (
          <ContactInformaion />
        )
      }
    </Stack>
  );
};

export default ProfileApp;
