import React from "react";

import { Box, Stack, Typography, IconButton } from "@mui/material";
import { alpha, useTheme } from "@mui/material/styles";

import { File, DownloadSimple } from "phosphor-react";

import { DetectURLFromText as Text, MessageWrapper } from "./utils";

export const DocumentView = ({ message, bgColor }) => {

  const theme = useTheme();

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={1}
      sx={{
        borderRadius: "9px",
        backgroundColor: bgColor ?? theme.palette.grey[300],
        color: bgColor ? ( theme.palette.mode === "light" ? "#31363F" : "#EEEEEE" ) : "#6D2D80",
      }}
    >
      <Stack spacing={1} direction={"row"} alignItems={"center"}>
        <File size={30} />
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            width: "max-content",
            maxWidth: "calc(100vw - 600px)",
          }}
        >
          {message.message.substring(0, 25)}
          {message.message.length > 25 ? "..." : ""}
        </Typography>
      </Stack>
      <IconButton>
        <DownloadSimple color={theme.palette.primary.main} />
      </IconButton>
    </Stack>
  );
};

const DocumentMessageBubble = ({ message }) => {
  const theme = useTheme();

  return (
    <Box textAlign={message.incoming && !message.outgoing ? "left" : "right"}>
      <Box
        sx={{
          width: "max-content",
          minWidth: "220px",
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
        <Stack spacing={1}>
          <DocumentView message={message} />
          <Typography variant="body2" sx={{ textAlign: "left" }}>
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
        </Stack>
      </Box>
    </Box>
  );
};

const Wrapper = ({ message }) => {
  return (
    <MessageWrapper
      component={<DocumentMessageBubble message={message} />}
      message={message}
    />
  );
};

export default Wrapper;
