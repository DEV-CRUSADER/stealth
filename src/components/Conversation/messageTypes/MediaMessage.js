import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { alpha, useTheme } from "@mui/material/styles";

import { DetectURLFromText as Text, MessageWrapper } from "./utils";

import { LazyLoadImage } from "react-lazy-load-image-component";

const MediaMessage = ({ message }) => {
  const theme = useTheme();

  return (
    <Box
      p={0.5}
      sx={{
        maxWidth: "500px",
        borderRadius: "10px",
        padding: "10px",
        display: "inline-block",
        color:
          !message.incoming && message.outgoing
            ? theme.palette.grey[300]
            : theme.palette.text.primary,
        backgroundColor:
          !message.incoming && message.outgoing
            ? theme.palette.primary.main
            : alpha(theme.palette.primary.light, 0.25),
      }}
    >
      <Stack spacing={1}>
        <LazyLoadImage
          height={210}
          effect="blur"
          src={message.img}
          placeholderSrc="/assets/Images/lazyLoadImagePlaceholder.jpg"
          style={{
            maxHeight: "210px",
            borderRadius: "8px",
          }}
        />
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
            linkColor={
              theme.palette.mode === "dark"
                ? message.incoming && !message.outgoing
                  ? theme.palette.primary.light
                  : theme.palette.primary.darker
                : theme.palette.primary.darker
            }
          />
        </Typography>
      </Stack>
    </Box>
  );
};

const Wrapper = ({ message, displayType }) => {
  return (
    <MessageWrapper
      component={<MediaMessage message={message} />}
      message={message}
      displayType={displayType}
    />
  );
};

export default Wrapper;
