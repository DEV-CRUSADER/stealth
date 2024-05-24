import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

import { DetectURLFromText as Text } from "./utils";

const MediaMessage = ({ message }) => {
  const theme = useTheme();

  return (
    <Box
      p={0.5}
      sx={{
        width: "fit-content",
        maxWidth: "70%",
        borderRadius: "10px",
        padding: "10px",
        display: "inline-block",
        color:
          !message.incoming && message.outgoing
            ? theme.palette.grey[300]
            : theme.palette.text.primary,
        backgroundColor:
          !message.incoming && message.outgoing
            ? theme.palette.primary.main
            : alpha(theme.palette.primary.light, 0.25),
      }}
    >
      <Stack spacing={1}>
        <img
          src={message.img}
          alt={"Loading..."}
          style={{
            maxHeight: "210px",
            borderRadius: "8px",
          }}
        />
        <Typography variant="body2" sx={{ width: "max-content" }}>
          <Text 
            content={message.message} 
            linkColor={theme.palette.mode === "dark" ? ( message.incoming && !message.outgoing ? theme.palette.primary.light : theme.palette.primary.darker ): theme.palette.primary.darker}
          />
        </Typography>
      </Stack>
    </Box>
  );
};

export default MediaMessage;
