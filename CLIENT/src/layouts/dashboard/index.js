import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import SideBar from "./SideBar";
import { connectSocket, socket } from "../../socket";
import { showSnackbar } from "../../redux/slices/app.js";

const DashboardLayout = () => {
  
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      }
      
      if (!socket){
        connectSocket(user_id);
      }

      socket.on("new_frinend_request", (data) => {
        // dispatch(showSnackbar({ severity: "info", message: data.message }));
      });

      socket.on("request_accepted", (data) => {
        // dispatch(showSnackbar({ severity: "info", message: data.message }));
      });

      socket.on("request_sent", (data) => {
        // dispatch(showSnackbar({ severity: "info", message: data.message }));
      });

      return () => {
        socket.off("new_frinend_request");
        socket.off("request_accepted");
        socket.off("request_sent");
      }

    }
  }, [isLoggedIn, socket]);

  const theme = useTheme();

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
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
