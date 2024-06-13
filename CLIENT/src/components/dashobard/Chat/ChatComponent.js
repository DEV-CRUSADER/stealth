import React from "react";
import { Box, Stack, Typography, Avatar, Badge } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../utils";

const ChatComponent = ({ id, img, name, msg, time, unread, online }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        cursor: "pointer",
        boxShadow: theme.shadows[4],
        backgroundColor:
          theme.palette.mode === "light"
            ? "#FFFFFF"
            : theme.palette.background.default,
      }}
      p={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name[0]} src={img} />
            </StyledBadge>
          ) : (
            <Avatar alt={name[0]} src={img} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">
              {msg.substring(0, 25)}
              {msg.length > 25 ? "..." : ""}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography fontWeight={600} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatComponent;
