import {
  Box,
  Stack,
} from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Messages from "./Messages";
import Footer from "./Footer";


const Conversation = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "calc(100vw - 400px)",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.default,
        height: "100%",
      }}
    >
      <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        <Header />
        <Messages />
        <Footer />
      </Stack>
    </Box>
  );
};

export default Conversation;
