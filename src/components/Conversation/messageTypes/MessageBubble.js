import { Box, Typography } from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

import { DetectURLFromText as Text, MessageWrapper } from "./utils";

const MessageBubble = ({ message }) => {
  const theme = useTheme();

  return (
    <Box
      textAlign={message.incoming && !message.outgoing ? "left" : "right"}
      sx={{
        maxWidth: "500px",
      }}
    >
      <Box
        sx={{
          width: "fit-content",
          borderRadius: "10px",
          padding: "10px",
          display: "inline-block",
          color:
            !message.incoming && message.outgoing
              ? "#FFF"
              : theme.palette.text.primary,
          backgroundColor:
            !message.incoming && message.outgoing
              ? theme.palette.primary.main
              : alpha(theme.palette.primary.light, 0.25),
        }}
      >
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            minWidth: "fit-content",
            maxWidth: "calc(100vw - 600px)",
            padding: "3px 0px 0px 10px",
          }}
          gutterBottom
        >
          <Text
            content={message.message}
            linkColor={
              theme.palette.mode === "dark"
                ? message.incoming && !message.outgoing
                  ? theme.palette.primary.light
                  : theme.palette.primary.darker
                : theme.palette.primary.darker
            }
          />
        </Typography>
      </Box>
    </Box>
  );
};

const Wrapper = ({ message, displayType }) => {
  return (
    <MessageWrapper
      component={<MessageBubble message={message} />}
      message={message}
      displayType={displayType}
    />
  );
};

export default Wrapper;
