import {
  Box,
  IconButton,
  Stack,
  Typography,
  Divider,
  Avatar,
  Badge,
} from "@mui/material";
import React from "react";
import { useState } from "react";

import { useTheme, styled } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import {
  MagnifyingGlass,
  Phone,
  VideoCamera,
  CaretDown,
} from "phosphor-react";

import { useDispatch } from "react-redux";
import { ToggleSidebar } from "../../redux/slices/app";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const Header = () => {

  const theme = useTheme();
  const dispatch = useDispatch();

  const [name, setName] = useState(faker.name.firstName());
  const [online, setOnline] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[6],
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        height={"100%"}
        p={2}
      >
        <Stack 
          direction={"row"} 
          spacing={2}
          onClick={() => {
            dispatch(ToggleSidebar());
          }}
          sx={{
            cursor: "pointer",
          }}
        >
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt={name[0]} src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar alt={name[0]} src={faker.image.avatar()} />
          )}
          <Stack>
            <Typography fontWeight={600}>{name}</Typography>
            <Typography variant={"caption"} color={"#676767"}>
              {online ? "Online" : "Offline"}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" variant="middle" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
