import React from "react";

import { Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Chats from "../../components/Chats.js";
import Conversation from "../../components/Conversation/index";
import ContactInformaion from "../../components/Contact/index";

const GeneralApp = () => {
  const theme = useTheme();

  return (
    <Stack direction={"row"}>
      <Chats />
      <Box
        sx={{
          width: "calc(100vw - 400px - 300px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#FFFFFF"
              : theme.palette.background.default,
          height: "100%",
        }}
      >
        <Conversation />
      </Box>
      <ContactInformaion />
    </Stack>
  );
};

export default GeneralApp;
