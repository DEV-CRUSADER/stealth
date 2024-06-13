import React from "react";
import { Link } from "react-router-dom";

import { SharedLinks } from "../../../data";
import { Box, Stack, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { Link as LinkIcon } from "phosphor-react";

const Links = () => {
  const theme = useTheme();

  return (
    <Stack
      spacing={1}
      sx={{
        width: "100%",
        height: "calc(100vh - 160px)",
        overflowY: "scroll",
      }}
    >
      {SharedLinks.map((msg, index) => (
        <Box
          p={1}
          sx={{
            backgroundColor:
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : theme.palette.primary.lighter,
            borderRadius: "10px",
          }}
          key={index}
        >
          <Stack spacing={1} direction={"row"}>
            <Box
              p={1}
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderRadius: "8px",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <LinkIcon size={34} />
            </Box>
            <Stack>
              <Typography variant="body1">
                {msg.title.substring(0, 25)}{msg.title.length > 25 ? "..." : ""}
              </Typography>
              <Typography
              sx={{
                color: theme.palette.mode === "light" ? theme.palette.primary.dark : theme.palette.primary.light,
                textAlign: "left",
                width: "max-content",
              }}
              variant="caption"
              component={Link}
              to={`//${
                msg.link.split("//")[1] === undefined
                  ? msg.link
                  : msg.link.split("//")[1]
              }`}
              target="_blank"
            >
              {msg.link.substring(0, 29)}{msg.link.length > 29 ? "..." : ""}
            </Typography>
              
            </Stack>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
};

export default Links;
