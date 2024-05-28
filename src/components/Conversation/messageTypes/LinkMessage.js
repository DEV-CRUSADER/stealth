import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Link as LinkIcon } from "phosphor-react";

import { DetectURLFromText as Text, MessageWrapper } from "./utils";

const LinkMessage = ({ message }) => {
  const theme = useTheme();

  return (
    <Box textAlign={message.incoming && !message.outgoing ? "left" : "right"}>
      <Box
        p={0.5}
        sx={{
          width: "fit-content",
          borderRadius: "10px",
          padding: "10px",
          display: "inline-block",
          color:
            !message.incoming && message.outgoing
              ? "#FFF"
              : theme.palette.text.primary,
          backgroundColor:
            !message.incoming && message.outgoing
              ? theme.palette.primary.main
              : alpha(theme.palette.primary.light, 0.25),
        }}
      >
        <Stack spacing={1}>
          <img
            src={message.preview}
            alt={"Loading..."}
            style={{
              maxHeight: "210px",
              borderRadius: "8px",
            }}
          />
          <Stack spacing={1}>
            <Typography
              variant="subtitle2"
              sx={{ textAlign: "left", width: "fit-content" }}
            >
              {message.title}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.primary.darker,
                textAlign: "left",
                width: "max-content",
              }}
              variant="subtitle2"
              component={Link}
              to={`//${
                message.link.split("//")[1] === undefined
                  ? message.link
                  : message.link.split("//")[1]
              }`}
              target="_blank"
            >
              <Button
                variant="contained"
                endIcon={<LinkIcon />}
                sx={{
                  color: "#FFF",
                  backgroundColor: theme.palette.primary.dark,
                  "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.dark, 0.8),
                  },
                }}
              >
                Open Link
              </Button>
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              minWidth: "fit-content",
              maxWidth: "calc(100vw - 600px)",
              padding: "3px 0px 0px 10px",
            }}
            gutterBottom
          >
            <Text 
              content={message.message} 
              linkColor={theme.palette.mode === "dark" ? ( message.incoming && !message.outgoing ? theme.palette.primary.light : theme.palette.primary.darker ): theme.palette.primary.darker}
            />
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Wrapper = ({ message }) => {
  return (
    <MessageWrapper component={<LinkMessage message={message}/>} message={message}/>
  )
}

export default Wrapper