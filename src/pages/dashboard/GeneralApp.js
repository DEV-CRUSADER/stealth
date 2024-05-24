import React from "react";

import { Stack } from "@mui/material";
import Conversation from "../../components/Conversation/index";
import Chats from "../../components/Chats.js";

const GeneralApp = () => {
  return (
    <Stack direction={"row"}>
      <Chats />
      <Conversation />
    </Stack>
  );
};

export default GeneralApp;
