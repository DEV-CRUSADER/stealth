import React, { useState } from "react";
import {
  Box,
  IconButton,
  Stack,
  Typography,
  Divider,
  Link,
} from "@mui/material";
import { CircleDashed, MagnifyingGlass, Plus } from "phosphor-react";
import { useTheme } from "@mui/material/styles";
import ChatComponent from "../Chat/ChatComponent";

import { ChatList } from "../../../data/index";
import { Search, SearchIconWrapper, StyledInputBase } from "../../Search";
import { DialogBlock } from "./utils";

const Groups = () => {
  const theme = useTheme();

  const [openCreateGroupForm, setOpenCreateGroupForm] = useState(false);

  const closeGroupDialog = () => {
    setOpenCreateGroupForm(false);
  };

  const openGroupDialog = () => {
    setOpenCreateGroupForm(true);
  };

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
          <Typography variant="h4">Groups</Typography>
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
            onClick={openGroupDialog}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={"space-between"}
              p={1}
              sx={{
                cursor: "pointer",
              }}
            >
              <span>Create new group</span>
              <Plus color={theme.palette.primary.main} size={24} />
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
                <ChatComponent key={pinnedChats.id} {...pinnedChats} chat_type="Group"/>
              )
            )}
            {ChatList.filter((chat) => chat.pinned && !chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} chat_type="Group"/>
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
                <ChatComponent key={pinnedChats.id} {...pinnedChats} chat_type="Group"/>
              )
            )}
            {ChatList.filter((chat) => !chat.pinned && !chat.online).map(
              (pinnedChats) => (
                <ChatComponent key={pinnedChats.id} {...pinnedChats} chat_type="Group"/>
              )
            )}
          </Stack>
        </Stack>
      </Stack>
      {openCreateGroupForm && (
        <DialogBlock
          open={openCreateGroupForm}
          handleClose={closeGroupDialog}
        />
      )}
    </Box>
  );
};

export default Groups;
