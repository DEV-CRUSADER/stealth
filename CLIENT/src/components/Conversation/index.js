import {
  Stack,
} from "@mui/material";
import React from "react";

import Header from "./Header";
import Messages from "./Messages";
import Footer from "./Footer";


const Conversation = () => {

  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      <Header />
      <Messages />
      <Footer />
    </Stack>
  );
};

export default Conversation;
