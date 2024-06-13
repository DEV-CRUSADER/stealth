import React from "react";

import { Box, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import SideBar from "./SideBar";

// TODO: convert isAuthenticated to server side
const isAuthenticated = true;

const DashboardLayout = () => {
  const theme = useTheme();

  if (!isAuthenticated){
    return <Navigate to={"/auth/login"}/>
  }


  return (
    <Stack direction="row">
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          width: "80px",
          height: "100vh",
          boxShadow: theme.shadows[4],
        }}
      >
        <Stack
          justifyContent={"space-between"}
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <SideBar />
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
