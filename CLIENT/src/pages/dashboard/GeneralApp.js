import React from "react";

import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Chats from "../../components/dashobard/Chat";
import Conversation from "../../components/Conversation";
import ContactInformaion from "../../components/Contact";

import { useSelector } from "react-redux";

const GeneralApp = () => {
  const theme = useTheme();

  const { sidebar } = useSelector((state) => state.app);

  return (
    <>
      <Stack direction={"row"}>
        <Chats />
        <Box
          sx={{
            position: "relative",
            width: sidebar.open ? "calc(100vw - 800px)" : "calc(100vw - 400px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FFFFFF"
                : theme.palette.background.default,
            height: "100%",
          }}
        >
          <Conversation />
        </Box>
        {sidebar.open && <ContactInformaion />}
      </Stack>
    </>
  );
};

export default GeneralApp;
