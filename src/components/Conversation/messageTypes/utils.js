import React from "react";
import { Stack, IconButton, Tooltip, Menu, MenuItem, Typography } from "@mui/material";

import { DotsThreeVertical } from "phosphor-react";
import { useTheme } from "@mui/material/styles";

import { MessageMenuItems } from "../../../data";

const URL_REGEX =
  /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;



function DetectURLFromText({ content, linkColor }) {
  const words = content.split(" ");

  return (
    <span>
      {words.map((word, index) => {
        return word.match(URL_REGEX) ? (
          <React.Fragment key={index}>
            <a
              href={`//${
                word.split("//")[1] === undefined ? word : word.split("//")[1]
              }`}
              target="_black"
              style={{
                color: linkColor,
              }}
            >
              {word}
            </a>{" "}
          </React.Fragment>
        ) : (
          word + " "
        );
      })}
    </span>
  );
}


const MessageWrapper = ({ component, message }) => {

  const theme = useTheme();

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const toggleMessageMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction={message.incoming && !message.outgoing ? "row-reverse" : "row"}
      width={"100%"}
      justifyContent={message.incoming && !message.outgoing ? "start" : "end"}
    >
      <Tooltip title="Message menu">
          <IconButton
            onClick={toggleMessageMenu}
            sx={{
              textAlign: "top",
              height: "fit-content",
            }}
          >
            <DotsThreeVertical size={18} color={theme.palette.mode === "light" ? "primary.main" : theme.palette.primary.light }/>
          </IconButton>
        </Tooltip>

      {component}
      <Menu
        anchorEl={anchorEl}
        id="message-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: message.incoming && !message.outgoing ? 14 : 96,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ 
          horizontal: message.incoming && !message.outgoing ? "left" : "right",
          vertical: 'top' 
        }}
        anchorOrigin={{ 
          horizontal: message.incoming && !message.outgoing ? "left" : "right", 
          vertical: 'bottom'
        }}
      >
        {MessageMenuItems.map((item) => (
          <MenuItem key={item.id}>
            <Stack
              direction={"row"}
              spacing={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                fontSize: "18px",
              }}
            >
              {item.icon}
              <Typography>
                {item.text}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  )
}

export { 
  DetectURLFromText, 
  MessageWrapper 
}
