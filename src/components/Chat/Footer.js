import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { useTheme, styled } from "@mui/material/styles";
import React from "react";
import { useSearchParams } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const StyledTextFiled = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: 20,
  },
  "& .MuiFilledInput-root": {
    borderRadius: 8,
  },
}));

const Actions = [
  {
    color: "primary.lighter",
    icon: <Image size={24} />,
    title: "Photo/Video",
  },
  {
    color: "primary.light",
    icon: <Sticker size={24} />,
    title: "Stickers",
  },
  {
    color: "primary.main",
    icon: <Camera size={24} />,
    title: "Image",
  },
  {
    color: "primary.dark",
    icon: <File size={24} />,
    title: "Document",
  },
  {
    color: "primary.darker",
    icon: <User size={24} />,
    title: "Contact",
  },
];

const ChatInput = ({ openPicker, setOpenPicker }) => {
  const theme = useTheme();

  const [openActions, setOpenActions] = React.useState(false);

  return (
    <StyledTextFiled
      fullWidth
      placeholder="Type a message"
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment
            position="static"
          >
            <Stack
              direction={"column"}
              sx={{
                width: "max-content",
                top: 0,
              }}
            >
              <Stack
                spacing={2}
                sx={{
                  display: openActions ? "flex" : "none",
                  position: "relative",
                  bottom: 0,
                  left: 0,
                }}
              >
                <Stack
                  spacing={2}
                  sx={{
                    position: "absolute",
                    bottom: 30,
                    left: -5,
                  }}
                >
                  {Actions.map((el, index) => (
                    <Tooltip title={el.title} placement="right" key={index}>
                      <Fab
                        onClick={() => {
                          setOpenActions(!openActions);
                        }}
                        sx={{
                          backgroundColor: el.color,
                        }}
                        aria-label="add"
                      >
                        {el.icon}
                      </Fab>
                    </Tooltip>
                  ))}
                </Stack>
              </Stack>

              <IconButton
                onClick={() => {
                  setOpenActions(!openActions);
                }}
              >
                <LinkSimple color={theme.palette.primary.main} />
              </IconButton>
            </Stack>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="static"
          >
            <Stack sx={{ position: "relative" }}>
              <IconButton
                onClick={() => {
                  console.log("clicked");
                  setOpenPicker(!openPicker);
                }}
              >
                <Smiley color={theme.palette.primary.main} />
              </IconButton>
            </Stack>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();

  const isMobile = useResponsive("between", "md", "xs", "sm");

  const [searchParams] = useSearchParams();

  const [openPicker, setOpenPicker] = React.useState(false);
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "transparent !important",
      }}
    >
      <Box
        p={isMobile ? 1 : 2}
        width={"100%"}
        sx={{
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack direction="row" alignItems={"center"} spacing={isMobile ? 1 : 3}>
          <Stack sx={{ width: "100%" }}>
            <Box
              style={{
                zIndex: 10,
                position: "fixed",
                display: openPicker ? "inline" : "none",
                bottom: 75,
                right: isMobile
                  ? 20
                  : searchParams.get("open") === "true"
                  ? 420
                  : 100,
              }}
            >
              <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={console.log}
              />
            </Box>
            {/* Chat Input */}
            <ChatInput openPicker={openPicker} setOpenPicker={setOpenPicker} />
          </Stack>
          <Box
            sx={{
              height: 48,
              width: 48,
              backgroundColor: theme.palette.primary.main,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ height: "100%" }}
              alignItems={"center"}
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#ffffff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
