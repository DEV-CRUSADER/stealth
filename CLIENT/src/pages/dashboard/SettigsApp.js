import { Stack } from "@mui/material";
import React from "react";
import SettingsMenu from "../../components/dashobard/Setting/SettingsMenu";

import SnackBar from "../utils";

const SettigsApp = () => {
  return (
    <>
      <Stack direction={"row"}>
        <SettingsMenu />
      </Stack>

      <SnackBar />
    </>
  );
};

export default SettigsApp;
