import { Stack, Typography } from "@mui/material";
import React from "react";

import NoChat from "../../assets/Illustration/NoChat";

const NullConversation = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NoChat />
      <Typography>Select a conversation to start</Typography>
    </Stack>
  );
};

export default NullConversation;
