import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Divider,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import ChatComponent from "./ChatComponent";

import { ChatList } from "../../data/index";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.default, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));


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
          <Typography variant="h5">Chats</Typography>
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
          <Stack direction="row" spacing={1} alignItems="center">
            <ArchiveBox 
              color={theme.palette.primary.main} 
              size={24}
            />
            <Typography
              sx={{
                color: theme.palette.primary.dark
              }}
            >Archived</Typography>
          </Stack>
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
