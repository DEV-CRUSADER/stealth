import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Box,
  Divider,
  IconButton,
  Stack,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/Images/logo.png";
import { NavButtons } from "../../data";

// FIXME: Remove all the faker
import { faker } from "@faker-js/faker";

const getPath = (index) => {
  switch (index) {
    case 0:
      return "/app";
    case 1:
      return "/group";
    case 2:
      return "/call";
    case 3:
      return "/settings";
    default:
      return "/app";
  }
};

const SideBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const [selected, setSelected] = useState(() => {
    switch (location.pathname) {
      case "/app":
        return 0;
      case "/group":
        return 1;
      case "/call":
        return 2;
      case "/settings":
        return 3;
      default:
        return -1;
    }
  });

  return (
    <>
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
          {NavButtons.map((button, index) =>
            button.index === selected ? (
              <React.Fragment key={index}>
                {button.index === 3 && <Divider />}
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: "30%",
                  }}
                  key={button.index}
                >
                  <IconButton
                    onClick={() => {
                      navigate(getPath(button.index));
                      setSelected(button.index);
                    }}
                    sx={{
                      width: "max-content",
                      color: "white",
                    }}
                    key={button.index}
                  >
                    {button.active}
                  </IconButton>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment key={index}>
                {button.index === 3 && <Divider />}
                <IconButton
                  onClick={() => {
                    setSelected(button.index);
                    navigate(getPath(button.index));
                  }}
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "dark"
                        ? "white"
                        : theme.palette.text.primary,
                  }}
                  key={button.index}
                >
                  {button.icon}
                </IconButton>
              </React.Fragment>
            )
          )}
        </Stack>
      </Stack>
      <Stack>
        <Avatar
          alt="user"
          src={faker.image.avatar()}
          id="demo-customized-button"
          aria-haspopup="true"
          variant="contained"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => {
            setSelected(-1);
            navigate("/profile")
          }}
        />
      </Stack>
    </>
  );
};

export default SideBar;
