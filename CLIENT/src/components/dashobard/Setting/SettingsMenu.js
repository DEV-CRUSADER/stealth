import React, { useState } from "react";

import { Stack, Typography, Avatar, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import { SettingsOptions } from "../../../data";

import { ThemeDialogBlock } from "./ThemeDialog";
import ShortcutDialog from "./ShortcutDialog";

import { LogoutUser } from "../../../redux/slices/auth";
import { useDispatch } from "react-redux";

const SettingsMenu = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openThemeBlock, setOpenThemeBlock] = useState(false);
  const [openShortcutBlock, setOpenShortcutBlock] = useState(false);

  const handleThemeOption = () => {
    setOpenThemeBlock(true);
  };

  const handleClose = () => {
    setOpenThemeBlock(false);
    setOpenShortcutBlock(false);
  };

  const handleOptionClick = (option) => {
    switch (option) {
      case "NOTIFICATION_SETTINGS":
        console.log("NOTIFICATION_SETTINGS");
        break;
      case "PRIVACY_SETTINGS":
        console.log("PRIVACY_SETTINGS");
        break;
      case "SECURITY_SETTINGS":
        console.log("SECURITY_SETTINGS");
        break;
      case "THEME_SETTINGS":
        handleThemeOption(true);
        break;
      case "CHAT_WALLPAPER_SETTINGS":
        console.log("CHAT_WALLPAPER_SETTINGS");
        break;
      case "REQUEST_ACCOUNT_INFO_SETTINGS":
        console.log("REQUEST_ACCOUNT_INFO_SETTINGS");
        break;
      case "KEYBOARD_SHORTCUT_SETTINGS":
        setOpenShortcutBlock(true);
        break;
      case "HELP_SETTINGS":
        console.log("HELP_SETTINGS");
        break;
      case "LOG_OUT":
        // console.log("LOG_OUT");
        dispatch(LogoutUser());
        break;
      default:
        console.log("No option selected");
    }
  };

  return (
    <Stack
      p={2}
      justifyContent={"space-between"}
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: 320,
        boxShadow: theme.shadows[4],
        overflowY: "scroll",
      }}
      height={"100%"} maxHeight={"100vh"}
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
            <React.Fragment key={index}>
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
                onClick={() => handleOptionClick(option.action)}
              >
                {option.icon}
                <Typography variant="h6">{option.text}</Typography>
              </Stack>
              <Divider />
            </React.Fragment>
          ))}
        </Stack>
      </Stack>
      <ThemeDialogBlock open={openThemeBlock} handleClose={handleClose} />
      <ShortcutDialog open={openShortcutBlock} handleClose={handleClose} />
    </Stack>
  );
};

export default SettingsMenu;
