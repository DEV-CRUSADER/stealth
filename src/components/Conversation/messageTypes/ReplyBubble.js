import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

import { DetectURLFromText as Text } from "./utils";

const ReplyMessageBubble = ({ message }) => {
  const theme = useTheme();

  return (
    <Box textAlign={message.incoming && !message.outgoing ? "left" : "right"}>
      <Box
        sx={{
          width: "fit-content",
          maxWidth: "70%",
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
        <Stack spacing={0.5}>
          <Typography
            variant="body2"
            p={1}
            sx={{
              textAlign: "left",
              borderRadius: "9px",
              backgroundColor: theme.palette.grey[300],
              color: "#6D2D80",
              borderLeft: `5px solid ${theme.palette.primary.dark}`,
            }}
          >
            {message.message.substring(0, 30) + (message.message.length > 30 ? "..." : "")}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              width: "max-content",
            }}
          >
            <Text
              content={message.reply}
              linkColor={theme.palette.mode === "dark" ? ( message.incoming && !message.outgoing ? theme.palette.primary.light : theme.palette.primary.darker ): theme.palette.primary.darker}
            />
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};


export default ReplyMessageBubble;