import React, { useState } from "react";
import { Box, Stack, Typography, Divider, Link } from "@mui/material";
import { MagnifyingGlass, Phone } from "phosphor-react";
import { useTheme } from "@mui/material/styles";

import { Search, SearchIconWrapper, StyledInputBase } from "../../Search";
import { DialogBlock } from "./utils";
import { CallLogComponent } from "./CallComponent";
import { faker } from "@faker-js/faker";

// FIXME: DEMO Data

export const CallLogHistory = [
  {
    id: 0,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: true,
    missed: true,
    time: "Yesterday 17:10",
    callType: "CALL",
  },
  {
    id: 1,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: true,
    missed: false,
    time: "Yesterday 17:10",
    callType: "CALL",
  },
  {
    id: 2,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: false,
    time: "Yesterday 17:10",
    callType: "VIDEO",
  },
  {
    id: 3,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: true,
    missed: true,
    time: "Yesterday 17:10",
    callType: "CALL",
  },
  {
    id: 4,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: true,
    missed: false,
    time: "Yesterday 17:10",
    callType: "CALL",
  },
  {
    id: 5,
    img: faker.image.avatar(),
    name: "Bootki",
    incomming: false,
    time: "Yesterday 17:10",
    callType: "VIDEO",
  },
];

// FIXME: End of demo data

const Calls = () => {
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
          <Typography variant="h4">Call logs</Typography>
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
              <span>Start new conversation</span>
              <Phone color={theme.palette.primary.main} size={24} />
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
            {CallLogHistory.map((call, index) => (
              <CallLogComponent
                key={call.id}
                id={call.id}
                img={call.img}
                name={call.name}
                incomming={call.incomming}
                missed={call.missed}
                time={call.time}
                callType={call.callType}
              />
            ))}
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

export default Calls;
