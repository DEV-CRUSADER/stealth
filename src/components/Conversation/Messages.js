import { Box, Stack, Divider } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { ChatHistory } from "../../data";

import { 
  MessageBubble, 
  ReplyMessageBubble, 
  MediaMessage, 
  LinkMessage,
  DocumentMessageBubble
} from "./messageTypes";

const Messages = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "scroll",
        flexGrow: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "grey"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack spacing={1}>
        {ChatHistory.map((message, index) => {
          switch (message.type) {
            case "divider":
              return <Divider>{message.text}</Divider>;
            case "msg":
              switch (message.subtype) {
                case "img":
                  return <MediaMessage key={index} message={message} />;
                case "reply":
                  return <ReplyMessageBubble key={index} message={message} />;
                case "link":
                  return <LinkMessage key={index} message={message} />;
                case "doc":
                  return <DocumentMessageBubble key={index} message={message} />;
                default:
                  return <MessageBubble key={index} message={message} />;
              }
            default:
              return null;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Messages;
