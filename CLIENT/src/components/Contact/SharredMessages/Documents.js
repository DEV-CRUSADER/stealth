import React from "react";

import { SharedDocs } from "../../../data";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { DocumentView } from "../../Conversation/messageTypes/DocumentMessage";

const Documents = () => {
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
      {SharedDocs.map((msg, index) => {
        return (
          <DocumentView
            message={msg}
            key={index}
            bgColor={
              theme.palette.mode === "dark"
                ? theme.palette.background.default
                : theme.palette.primary.lighter
            }
          />
        );
      })}
    </Stack>
  );
};

export default Documents;
