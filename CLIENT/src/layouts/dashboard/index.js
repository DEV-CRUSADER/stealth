import React from "react";
import { useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import SideBar from "./SideBar";

const DashboardLayout = () => {
  
  const { isLoggedIn } = useSelector((state) => state.auth);

  const theme = useTheme();

  if (!isLoggedIn){
    return <Navigate to={"/auth/login"}/>
  }


  return (
    <>
    <Stack direction="row">
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.default,
          width: "80px",
          height: "100vh",
          boxShadow: theme.shadows[4],
          zIndex: 100,
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
    </>
  );
};

export default DashboardLayout;
