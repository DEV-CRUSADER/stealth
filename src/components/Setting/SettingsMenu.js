import React from "react";

import { Box, Stack, Typography, Avatar, Divider, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { SettingsOptions } from "../../data";
import { Divide, SignOut } from "phosphor-react";

const SettingsMenu = () => {
  const theme = useTheme();

  return (
    <Stack
      p={2}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: 320,
        boxShadow: theme.shadows[4],
      }}
    >
      <Stack>
        <Typography variant="h4">Settings</Typography>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"start"}
          alignContent={"center"}
          spacing={3}
          p={3}
          sx={{
            margin: "30px auto",
          }}
        >
          <Avatar
            src={faker.image.avatar()}
            sx={{
              width: 60,
              height: 60,
            }}
          />
          <Stack justifyContent={"center"} spacing={0}>
            <Typography variant="body1" display="block" gutterBottom>
              {faker.name.firstName()}
            </Typography>
            <Typography variant="body1">{faker.phone.number()}</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Divider />
          {SettingsOptions.map((option, index) => (
            <>
              <Stack
                key={index}
                direction={"row"}
                alignItems={"center"}
                p={2}
                spacing={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                {option.icon}
                <Typography variant="h6">{option.text}</Typography>
              </Stack>
              <Divider />
            </>
          ))}
        </Stack>
      </Stack>
      {/* <Stack direction={"row"} alignItems={"center"} spacing={1}>
        <Button variant="outlined" startIcon={<SignOut />}>
          <Typography variant="body1">Log out</Typography>
        </Button>
      </Stack> */}
    </Stack>
  );
};

export default SettingsMenu;
