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

const Messages = ({ displayType }) => {
  const theme = useTheme();

  let messages = undefined;

  if (displayType === "STARRED"){
    messages = ChatHistory.filter(message => message.starred === true);
  } else {
    messages = ChatHistory
  }

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "scroll",
        flexGrow: 1,
        backgroundColor: (theme.palette.mode === "light") ? "grey" : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack spacing={1}>
        {messages.map((message, index) => {
          
          switch (message.type) {
            case "divider":
              return <Divider key={index} >{message.text}</Divider>;
            case "msg":
              switch (message.subtype) {
                case "img":
                  return <MediaMessage key={index} message={message} displayType={displayType}/>;
                case "reply":
                  return <ReplyMessageBubble key={index} message={message} displayType={displayType}/>;
                case "link":
                  return <LinkMessage key={index} message={message}displayType={displayType}/>;
                case "doc":
                  return <DocumentMessageBubble key={index} message={message} displayType={displayType}/>;
                default:
                  return <MessageBubble key={index} message={message} displayType={displayType}/>;
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
