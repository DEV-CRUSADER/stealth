import {
  Box,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";

import { useTheme, styled } from "@mui/material/styles";
import {
  LinkSimple,
  Smiley,
  PaperPlaneTilt,
} from "phosphor-react";

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

const Footer = () => {

  const theme = useTheme();

  return (
    <Box
    sx={{
      width: "100%",
      height: 75,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[6],
    }}
    p={2}
  >
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={3}
    >
      <StyledTextFiled
        fullWidth
        placeholder="Type a message"
        variant="filled"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <IconButton>
              <LinkSimple color={theme.palette.primary.main} />
            </IconButton>
          ),
          endAdornment: (
            <IconButton>
              <Smiley color={theme.palette.primary.main} />
            </IconButton>
          ),
        }}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "20%",
        }}
      >
        <IconButton>
          <PaperPlaneTilt color="#FFF" />
        </IconButton>
      </Box>
    </Stack>
  </Box>
  )
}

export default Footer