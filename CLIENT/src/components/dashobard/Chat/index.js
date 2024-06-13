import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import ChatComponent from "./ChatComponent";

import { ChatList } from "../../../data/index";
import { Search, SearchIconWrapper, StyledInputBase } from "../../Search";

const Chats = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "320px",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#F8FAFF"
            : theme.palette.background.paper,
        boxShadow: theme.shadows[5],
      }}
    >
      <Stack
        p={2}
        spacing={2}
        sx={{
          height: "100vh",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack width="100%">
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>
        </Stack>
        <Stack spacing={1.5} direction="column">
          <Typography
            sx={{
              color: theme.palette.primary.main,
            }}
            component={Link}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{
                cursor: "pointer",
              }}
            >
              <ArchiveBox color={theme.palette.primary.main} size={24} />
              <span>Archived</span>
            </Stack>
          </Typography>
          <Divider />
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            flexGrow: 1,
            overflowY: "scroll",
            height: "100%",
          }}
        >
          <Stack spacing={2.4}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#676767",
              }}
            >
              Pinned
            </Typography>
            {ChatList.filter((chat) => chat.pinned && chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} />
              )
            )}
            {ChatList.filter((chat) => chat.pinned && !chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} />
              )
            )}
          </Stack>
          <Stack spacing={2.4}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#676767",
              }}
            >
              All Chats
            </Typography>
            {ChatList.filter((chat) => !chat.pinned && chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} />
              )
            )}
            {ChatList.filter((chat) => !chat.pinned && !chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} />
              )
            )}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
