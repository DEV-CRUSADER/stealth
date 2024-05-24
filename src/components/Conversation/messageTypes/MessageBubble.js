import { Box,Typography} from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

import { DetectURLFromText as Text } from "./utils";

const MessageBubble = ({ message }) => {
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
        <Typography
          variant="body2"
          sx={{
            textAlign: "left",
            width: "max-content",
          }}
        >
          <Text
            content={message.message}
            linkColor={theme.palette.mode === "dark" ? ( message.incoming && !message.outgoing ? theme.palette.primary.light : theme.palette.primary.darker ): theme.palette.primary.darker}          />
        </Typography>
      </Box>
    </Box>
  );
}

export default MessageBubble;