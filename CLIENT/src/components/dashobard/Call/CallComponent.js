import React from "react";
import { Box, Stack, Typography, Avatar, IconButton } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import { StyledBadge } from "../utils";

import {
  Phone,
  VideoCamera,
  ArrowDownLeft,
  ArrowUpRight,
} from "phosphor-react";

const CallLogComponent = ({
  id,
  img,
  name,
  incomming,
  missed,
  time,
  callType,
}) => {
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
          <Avatar alt={name[0]} src={img} />
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Stack alignItems={"center"} direction={"row"} spacing={1}>
              <Typography>
                {incomming ? (
                  <ArrowDownLeft
                    size={12}
                    color={missed ? "#D45E6C" : "#76D45E"}
                  />
                ) : (
                  <ArrowUpRight size={12} color={"#76D45E"} />
                )}
              </Typography>
              <Typography variant="caption">{time}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <IconButton width={"fit-content"}>
            {callType === "CALL" ? (
              <Phone size={20} color={"#76D45E"} weight="fill"/>
            ) : (
              <VideoCamera size={20} color={"#76D45E"} weight="fill"/>
            )}
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

const CallComponent = ({ id, img, name, online }) => {
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
          </Stack>
        </Stack>
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
          spacing={1}
        >
          <IconButton width={"fit-content"}>
            <Phone size={20} color={"#76D45E"} weight="fill"/>
          </IconButton>
          <IconButton width={"fit-content"}>
            <VideoCamera size={20} color={"#76D45E"} weight="fill"/>
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export { CallLogComponent, CallComponent };
