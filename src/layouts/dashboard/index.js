import { 
  Avatar, 
  Box, 
  Divider, 
  IconButton, 
  Stack,
  Switch,
  Typography, 
  MenuItem,

} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import { StyledMenu } from "./utils";


import Logo from "../../assets/Images/logo.png";
import { NavButtons, NavSetting, ProfileMenu } from "../../data";

import useSettings from "../../hooks/useSettings";

import { faker } from "@faker-js/faker";
import { SignOut } from "phosphor-react";

const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);

  const {onToggleMode} = useSettings()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Stack direction="row">
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
                    color: theme.palette.mode === "dark"? "white" : theme.palette.text.primary,
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
                    color: theme.palette.mode === "dark" ? "white" : theme.palette.text.primary,
                  }}
                  key={button.index}
                >
                  {button.icon}
                </IconButton>
              )
            )}
          </Stack>   
        </Stack>
        <Stack>
          {/* FIXME: Remove the below switch */}
          <Switch 
            defaultChecked={false}
            onChange={() => onToggleMode()}
          />
          <Stack>
            
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {
              ProfileMenu.map((menu, index) => (
                <MenuItem onClick={handleClose} disableRipple key={index}>
                  <Stack
                    direction={"row"}
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                      fontSize: "20px",
                    }}
                  >
                    {menu.icon}
                    <Typography>
                      {menu.title}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))
            }
            <Divider />
            <MenuItem onClick={handleClose} disableRipple>
              <Stack
                direction={"row"}
                spacing={2}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  color: theme.palette.error.main,
                }}
              >
                <SignOut />
                <Typography>
                  Sign Out
                </Typography>
              </Stack>
            </MenuItem>
          </StyledMenu>

            <Avatar 
              alt="user" 
              src={faker.image.avatar()}
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              sx={{
                cursor: "pointer",
              }}
            />
          </Stack>
        </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
