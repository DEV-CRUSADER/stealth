import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/Images/logo.png";
import { NavButtons, NavSetting } from "../../data";

import { faker } from "@faker-js/faker";

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          width: "80px",
          height: "100vh",
          boxShadow: theme.shadows[4],
        }}
      >
        <Stack
          justifyContent={"space-between"}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              width: "64px",
              height: "64px",
              borderRadius: "50%",
            }}
          >
            <img src={Logo} alt="Chat App Logo" />
          </Box>
          <Stack
            spacing={2}
            sx={{
              width: "max-content",
            }}
          >
            {NavButtons.map((button) =>
              button.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "30%",
                  }}
                  key={button.index}
                >
                  <IconButton
                    onClick={() => setSelected(button.index)}
                    sx={{
                      width: "max-content",
                      color: "white",
                    }}
                    key={button.index}
                  >
                    {button.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(button.index)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode == "dark"? "white" : theme.palette.text.primary,
                  }}
                  key={button.index}
                >
                  {button.icon}
                </IconButton>
              )
            )}
            <Divider />
            {NavSetting.map((button) =>
              button.index === selected ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "30%",
                  }}
                  key={button.index}
                >
                  <IconButton
                    onClick={() => setSelected(button.index)}
                    sx={{
                      width: "max-content",
                      color: "white",
                    }}
                    key={button.index}
                  >
                    {button.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => setSelected(button.index)}
                  sx={{
                    width: "max-content",
                    color: theme.palette.mode == "dark" ? "white" : theme.palette.text.primary,
                  }}
                  key={button.id}
                >
                  {button.icon}
                </IconButton>
              )
            )}
          </Stack>   
        </Stack>
        <Stack>
          <Avatar alt="user" src={faker.image.avatar()}></Avatar>
        </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
